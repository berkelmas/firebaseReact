function sendMessage(data) {
    return (
        {
            type: 'send_message',
            payload: {
                message: data
            }
        }
    )
}