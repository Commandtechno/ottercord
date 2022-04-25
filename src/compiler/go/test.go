package main

import "fmt"

type MessageType int

const (
	MessageTypeDefault MessageType = 0
	Balls                          = "balls"
)

type Message struct {
	Type MessageType `json:"type"`
}

type Client struct{}

func (client *Client) fetch(param string) string {
	return "/channels/" + param
}

func main() {
	str := "string"
	msg := Message{
		Type: 4,
	}

	fmt.Println(str)
	fmt.Println(msg)

	client := Client{}
	client.fetch("balls")
}