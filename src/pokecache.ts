import { clearInterval } from "timers";

export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {

    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number){
        this.#interval = interval;
        this.#startReapLoop();
    };
    

    add<T>(key: string, val: T) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val
        });
    }
    get<T>(key: string) {
        const entry = this.#cache.get(key);
        return entry ? entry.val as T : undefined;
    
    }

    #reap() {
        const now = Date.now();
       for ( const [key, entry] of this.#cache.entries() ) {
        if (now - entry.createdAt > this.#interval) {
            this.#cache.delete(key);
        }
           }
        }

    #startReapLoop() {
            this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
             
}
    stopReapLoop() {
        clearInterval(this.#interval)
        this.#reapIntervalId = undefined

    }
}

