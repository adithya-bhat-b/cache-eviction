class CacheEviction {
    constructor(cacheSize){
        if (this.constructor == CacheEviction) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.cacheSize = cacheSize;
        this.cacheSequence = new Map();
    }
    Get(key){
        const value = this.cacheSequence.get(key);
        if (! value) throw "Key doesn't exist.";
        this.cacheSequence.delete(key);
        this.cacheSequence.set(key, value);
        return value;
    }
    StateOfCache(){
        return this.cacheSequence;
    }
}

class LRUCacheEviction extends CacheEviction{
    constructor(cacheSize){
        super(cacheSize);
    }
    Insert(key, value){
        if(this.cacheSequence.get(key)) throw "Key already exists.";
        if (this.cacheSequence.size == this.cacheSize){
            this.cacheSequence.delete(this.cacheSequence.keys().next().value);
        }
        this.cacheSequence.set(key, value);
    }
}

class MRUCacheEviction extends CacheEviction{
    constructor(cacheSize){
        super(cacheSize);
    }
    Insert(key, value){
        if(this.cacheSequence.get(key)) throw "Key already exists.";
        if (this.cacheSequence.size == this.cacheSize){
            this.cacheSequence.delete(Array.from(this.cacheSequence.keys()).pop());
        }
        this.cacheSequence.set(key, value);
    }
}

module.exports = { LRUCacheEviction, MRUCacheEviction }