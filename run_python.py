from cache_eviction  import LRUCacheEviction, MRUCacheEviction

# Creating LRU cache instance
lru = LRUCacheEviction(5)

lru.insert("A", 1)
lru.insert("B", 2)
lru.insert("C", 3)
lru.insert("D", 4)
lru.insert("E", 5)
print(lru.state_of_cache())
lru.insert("F", 6)
print(lru.state_of_cache())
print(lru.get("B"))
print(lru.get("C"))
lru.insert("G", 8)
print(lru.state_of_cache())


# Creating MRU cache instance
mru = MRUCacheEviction(5)

mru.insert("A", 1)
mru.insert("B", 2)
mru.insert("C", 3)
mru.insert("D", 4)
mru.insert("E", 5)
print(mru.state_of_cache())
mru.insert("F", 6)
print(mru.state_of_cache())
print(mru.get("B"))
print(mru.get("C"))
mru.insert("G", 8)
print(mru.state_of_cache())