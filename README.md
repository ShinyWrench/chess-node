# chess-node

## Goal

Build a chess-playing server (node) that can be deployed in a headless swarm of many server nodes. A human-sent request to any node can begin (or end?) a tournament that is automatically played to completion by the nodes.

## Design

**Major Components**

-   Express server for interaction with humans
-   WebSocket server for interaction with servers
-
