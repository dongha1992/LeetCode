# Write your MySQL query statement below
SELECT DISTINCT v.author_id as id
FROM Views v
WHERE v.author_id = v.viewer_id
ORDER BY id ASC;