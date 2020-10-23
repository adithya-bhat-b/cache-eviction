from abc import ABC
from collections import OrderedDict

class CacheEviction(ABC):
    def __init__(self, cache_size):
        self.cache_size = cache_size
        self.cache_sequence = OrderedDict()
        
    def get(self, key):
        if not self.cache_sequence.get(key, None):
            raise "Key doesn't exist."
        value = self.cache_sequence.pop(key)
        self.cache_sequence[key] = value
        return value
    
    def state_of_cache(self):
        return self.cache_sequence

class LRUCacheEviction(CacheEviction):
    def __init__(self, cache_size):
        super().__init__(cache_size)

    def insert(self, key, value):
        if self.cache_sequence.get(key, None):
            raise "Key already exists."
        if len(self.cache_sequence) == self.cache_size:
            del self.cache_sequence[next(iter(self.cache_sequence))]
        self.cache_sequence[key] = value       

class MRUCacheEviction(CacheEviction):
    def __init__(self, cache_size):
        super().__init__(cache_size)

    def insert(self, key, value):
        if self.cache_sequence.get(key, None):
            raise "Key already exists."
        if len(self.cache_sequence) == self.cache_size:
            del self.cache_sequence[list(self.cache_sequence)[-1]]
        self.cache_sequence[key] = value