const { LRUCacheEviction, MRUCacheEviction }  = require('./CacheEviction');

// Creating LRU cache instance
lru = new LRUCacheEviction(5);

lru.Insert("A", 1);
lru.Insert("B", 2);
lru.Insert("C", 3);
lru.Insert("D", 4);
lru.Insert("E", 5);
console.log(lru.StateOfCache())
lru.Insert("F", 6)
console.log(lru.StateOfCache())
console.log(lru.Get("B"))
console.log(lru.Get("C"))
lru.Insert("G", 8)
console.log(lru.StateOfCache())

// Creating MRU cache instance
mru = new MRUCacheEviction(5);

mru.Insert("A", 1);
mru.Insert("B", 2);
mru.Insert("C", 3);
mru.Insert("D", 4);
mru.Insert("E", 5);
console.log(mru.StateOfCache())
mru.Insert("F", 6)
console.log(mru.StateOfCache())
console.log(mru.Get("B"))
console.log(mru.Get("C"))
mru.Insert("G", 8)
console.log(mru.StateOfCache())