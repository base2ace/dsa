def bucketSort(nums: list[float]) -> list[float]:
    """
    Bucket Sort Algorithm
    Time Complexity: O(n + k)
    Space Complexity: O(n + k)
    """
    if not nums:
        return nums

    bucket_count = len(nums)
    buckets = [[] for _ in range(bucket_count)]

    for num in nums:
        index = int(num * bucket_count)
        if index >= bucket_count:
            index = bucket_count - 1
        buckets[index].append(num)

    for bucket in buckets:
        bucket.sort()

    k = 0
    for bucket in buckets:
        for val in bucket:
            nums[k] = val
            k += 1

    return nums
