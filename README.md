{job="nginx"} | pattern `<remote_addr> - - <time_local> "<method> <_> <_>" <status> <_> <_> "<_>" <_>`

{job="nginx"} | pattern `<_> - - <_> "<method> <_> <_>" <status> <_> <_> "<_>" <_>`

sum (count_over_time({job="nginxlogs"} [15m] | pattern `<_> - - <_> "<method> <_> <_>" <status> <_> <_> "<_>" <_>`)) by (status)


https://sbcode.net/grafana/nginx-promtail/

https://youtu.be/zIdEVNA6YTI


sum (count_over_time({job="nginxlogs"} [15m] | pattern `<_> - - <_> "<method> <_> <_>" <status> <_> <_> "<_>" <_>`)) by (status)


`<remote_addr> - - <time_local> "<method> <_> <_>" <_> <_> <_> "<_>" <_>`