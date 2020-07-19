<div align="center">

# Assay ML model ground truth vs predictions visualizer

<img src="https://github.com/vladdoster/assay-viz/blob/master/assay-viz.png" data-canonical-src="https://github.com/vladdoster/assay-viz/blob/master/assay-viz.png" width="400" height="400" />

</div>

## Usage

#### 1. Load dataset
This should only be every time `./clear_env.sh` is run or if you see no data when you go to [http://0.0.0.0:8000](http://0.0.0.0:8000).
```bash
./load_dataset.sh
```
**Note**: Loading dataset multiple times with out clearing env results in duplicates DB records.
#### 2. Create superuser
```bash
./create_superuser.sh
```
#### 3. Start application
```bash
./start_application.sh
```
**Note**: Docker images can be found on [DockerHub](https://hub.docker.com/repository/docker/vdoster/assay_viz)
