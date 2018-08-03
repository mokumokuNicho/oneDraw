import { h, app } from "hyperapp"
import Twitter from "twitter"

const state = {
}

const actions = {
}

const consumer_key = 'MUxI500CBeRDCYBjIk0ZZnA0M'
const consumer_secret = 'LAFhrrVhBvmQwiDBiIcbZVx23nppMFu1crh1tT0P3Yffkl7TAb'
const access_token_key = '408473366-auVyzfDutX3S90B3XjyrYyUdupfOm6akXs1R4r9S'
const access_token_secret = 'j1qnXMuFvOJ310kdWYye43kpUh2aV6P9yeULKb648Gmgp'

const twitterClient = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
})



const view = (state, actions) => (
    <div className={"ui container"}>
        <div className="ui three item menu">
            <a className="active item">page1</a>
            <a className="item">page2</a>
            <a className="item">page3</a>
        </div>

        <div className="ui three column grid">
            <div className="column">
                <div className="ui fluid card">
                    <div className="image">
                        <img src="/images/sample1.jpg" />
                    </div>
                    <div className="content">
                        <a className="header">Daniel Louise</a>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="ui fluid card">
                    <div className="image">
                        <img src="/images/sample2.jpg" />
                    </div>
                    <div className="content">
                        <a className="header">Helen Troy</a>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="ui fluid card">
                    <div className="image">
                        <img src="/images/sample3.png" />
                    </div>
                    <div className="content">
                        <a className="header">Elliot Fu</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

const main = app(state, actions, view, document.body)
