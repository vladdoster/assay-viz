

<div align="center">

# Assay model gt/predictions visualizer

<img src="https://github.com/vladdoster/assay-viz/blob/master/assay-viz.png" data-canonical-src="https://github.com/vladdoster/assay-viz/blob/master/assay-viz.png" width="400" height="400" />

</div>

# DB choice
PostgreSQL was chosen for a variety of reasons:

1. Due to the workload I heard about, at scale, PostgreSql is a good candidate.
It has really solid performance even as a single node. 
2. Open source, nuff said.
3. Wide variety of datatypes. I didnt employ any because time, but I could definitely see merging the gt/predicted values into an array datatype and reduce JS code on frontend and reduce the number of attributes on each db record which would scale better. 
4. Scales well in terms of data. I learned this first hand at GlobalPriorArt where we store every patent and its related family patents when an employee searches. It adds up quick, but postgres handles it with grace.

# To run
```shell script
./run.sh
```
#### Load dataset
This should only be every time `./clear_env.sh` is run or if you see no data when you go to [http://0.0.0.0:8000](http://0.0.0.0:8000). If run multiple times with out clearing env, duplicates will appear.
```shell script
./load_dataset.sh
```

#### Create superuser to access admin panel
```shell script
./createsuperuser.sh
```

# Extra info
This app is good at only getting info it needs. It only retrieves a few fields to populate the table and uses ajax to get the rest of the data when needed.
I think it would scale pretty well especially if in a VPC where networking latency is low.

The docker images can be found at https://hub.docker.com/repository/docker/vdoster/assay_viz

