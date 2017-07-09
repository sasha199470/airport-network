import {} from '@types/nodejs';

declare let process: any;

export class Semaphore {
  private tasks: (() => void)[] = [];
  count: number;

  constructor(count: number) {
    this.count = count;
  }

  private sched() {
    if (this.count > 0 && this.tasks.length > 0) {
      this.count--;
      this.tasks.shift()();
    }
  }

  public acquire() {
    return new Promise<() => void>((res, rej) => {
      var task = () => {
        var released = false;
        res(() => {
          if (!released) {
            released = true;
            this.count++;
            this.sched();
          }
        });
      };
      this.tasks.push(task);
      process.nextTick(this.sched.bind(this));
    });
  }

  public use<T>(f: () => Promise<T>) {
    return this.acquire()
      .then(release => {
        return f()
          .then((res) => {
            release();
            return res;
          })
          .catch((err) => {
            release();
            throw err;
          });
      });
  }
}

export class Mutex extends Semaphore {
  constructor() {
    super(1);
  }
}
