package airportrobot

import (
    "fmt"
)

type Greeter interface {
    LanguageName() string
    Greet(name string) string
}

type Italian struct { }
type Portuguese struct { }

func (i Italian) LanguageName() string {
    return "Italian"
}

func (i Italian) Greet(name string) string {
    return fmt.Sprintf("I can speak %s: Ciao %s!", i.LanguageName(), name)
}

func (p Portuguese) LanguageName() string {
    return "Portuguese"
}

func (p Portuguese) Greet(name string) string {
    return fmt.Sprintf("I can speak %s: Olá %s!", p.LanguageName(), name)
}

func SayHello(name string, greeter Greeter) string {
    return greeter.Greet(name)
}