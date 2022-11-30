export function updateFeature(feature: string, socket: WebSocket | undefined, id: number) {
  const message = {
    event: "show",
    data: {
      value: feature, id,
    }
  }
  socket?.send(JSON.stringify(message))
}

export function sendVote(id: number, vote: string, socket: WebSocket | undefined) {
  const message = {
    event: "voting",
    data: {
      value: vote, id,
    }
  }
  socket?.send(JSON.stringify(message))
}