## 구현할 기능 목록

- [x] 메인 화면 기능 목록을 출력한다.

- [x] 메인 화면 기능을 입력받는다.

  - [ ] `1`(경로 조회), `Q`(종료) 중 하나가 아니라면 예외 처리한다.

- [x] 경로 기준 기능 목록을 출력한다.

- [x] 경로 기준 기능을 입력받는다.

  - [ ] `1`(최단 거리), `2`(최소 시간), `B`(돌아가기) 중 하나가 아니라면 예외 처리한다.

### `1`(최단거리), `2`(최소 시간) 입력

- [x] 출발역을 입력받는다.

  - [ ] 유효한 출발역이 아니라면 예외 처리한다.

- [x] 도착역을 입력받는다.

  - [ ] 유효한 도착역이 아니라면 예외 처리한다.

- [x] 입력받은 경로 조회 기준에 맞게 경로를 조회한다.

  - [x] 조회 기준이 `최단 거리`일 때

  - [x] 조회 기준이 `최소 시간`일 때

- [x] 조회한 경로의 총 거리, 총 소요시간을 게산한다.

- [x] 조회한 경로, 총 거리, 총 소요시간을 출력한다.

  - [x] 출력 결과는 [INFO]를 붙여서 출력한다.

### `B` 입력

- [x] 메인 화면 기능을 입력받는다.

### 에러 처리

- [ ] 에러 발생 시 [ERROR]를 붙여서 출력한다.

- [ ] 에러 발생 시 기능을 다시 입력 받는다.
