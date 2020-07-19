<div align="center">

# Assay model gt/predictions visualizer

<img src="https://github.com/vladdoster/assay-viz/blob/master/assay-viz.png" data-canonical-src="https://github.com/vladdoster/assay-viz/blob/master/assay-viz.png" width="400" height="400" />

</div>

## Usage

#### 1. Load dataset
This should only be every time `./clear_env.sh` is run or if you see no data when you go to [http://0.0.0.0:8000](http://0.0.0.0:8000). If run multiple times with out clearing env, duplicates will appear.
```shell script
./load_dataset.sh
```
#### 2. Create superuser to access admin panel
```shell script
./createsuperuser.sh
```
#### 3. Start application
```shell script
./run.sh
```
**Note**: Docker images can be found on [DockerHub](https://hub.docker.com/repository/docker/vdoster/assay_viz)
