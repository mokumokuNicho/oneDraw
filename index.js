import { h, app } from "hyperapp"

const state = {
}

const actions = {
}

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
