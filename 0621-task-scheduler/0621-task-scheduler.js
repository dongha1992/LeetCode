/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const taskMap = new Map()

    for(const task of tasks) {
        taskMap.set(task, (taskMap.get(task) || 0) + 1)
    }

    const heaps = []

    for(const count of taskMap) {
        heaps.push(count)
    }
    heaps.sort((a, b) => b[1] - a[1])

    const cooldown = [];
    let time = 0;

    while(cooldown.length || heaps.length) {
        while(cooldown.length && cooldown[0][2] <= time) {
            const [task, count, cooltime] = cooldown.shift()
            heaps.push([task, count]);
            heaps.sort((a, b) => b[1] - a[1])
        }

        if(heaps.length > 0) {
            let [task, count] = heaps.shift();
            count--;
            if(count) {
                cooldown.push([task, count, time + n + 1])
            }
        }

        time++
    }
    return time
};