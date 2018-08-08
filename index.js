import { h, app } from "hyperapp"
import Twitter from "twitter"
import {Card} from "./card";

const state = {
    drawList: [1,2,3,4,5,6,7,8,9,10]
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
    <div>
        <header className={"nav"}>
            <div className={"nav-left"}>
                <span className={"nav-item"}>
                    <span className={"fa fa-language"}></span>OneDraw
                </span>
            </div>
            <div className={"nav-right"}>
                <span className={"nav-item"}>
                    <a href="#" className={"fa fa-user"}>ログイン</a>
                </span>
            </div>
        </header>

        <div className={"hero is-info is-bold"}>
            <div className={"hero-body"}>
                <div className={"container"}>
                    <h1 className={"title"}>OneDraw</h1>
                    <h2 className={"subtitle"}>ワンドロランキング</h2>
                </div>
            </div>
        </div>

        <section className={"level"}>
            <div className={"level-left"}></div>
            <div className={"level-right"}>
                <div className={"level-item tabs"}>
                    <ul>
                        <li className={"is-active"}><a>最近の投稿</a></li>
                        <li><a>ランキング</a></li>
                        <li><a>人気絵師</a></li>
                    </ul>
                </div>
            </div>
            <div className={"level-right"}>
                <div className={"level-item"}>
                    <a className={"button is-greylight"}>フォロー</a>
                </div>
            </div>
        </section>

        <section className="section cards">
            <div className="container">
                <div className="columns is-multiline">
                    {state.drawList.map((item) => {
                        return (
                            <div className="column">
                                {Card()}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>

)

const main = app(state, actions, view, document.body)
