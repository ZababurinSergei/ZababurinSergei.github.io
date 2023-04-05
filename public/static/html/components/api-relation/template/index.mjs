let components = new Map();

var isNumber = function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }
  
/*
components.set('api-property', {
    type: 'html',
    tag: (children) => ``,
    template: (props) => {
        return `<div class="api-matcher">${props.key}</div><pre>${JSON.stringify(props.value, null, 1)}</pre>
                <div class="relation-property">
                    <label for="api-set-address">
                       Address
                    </label>
                    <input id="api-set-address" type="button">
                </div>`
    }})
*/
let relation = {}


relation['/dex/processor/'] = {
    type: 'component',
    tag: (children) => `<api-main></api-main>`,
    template: (props) => `<slot name="lib-markdown"></slot>`,
    state: {
        createContext: (data = 0) => {
            if(isNumber(data)) {
                relation['/dex/processor/'].state.data = data
            } else {
                throw new Error('Parameter is not a number!');
            }
            
        },
        dispatch: (action, payload = {
            data: {
                count: undefined
            }
        }) => {
            switch(action){
                case"count":
                    return isNumber(payload.data.count) 
                        ?   relation['/dex/processor/'].state.data.count = relation['/dex/processor/'].state.data.count +  payload.data.count
                        :   relation['/dex/processor/'].state.data.count = relation['/dex/processor/'].state.data.count + 1
                    case "get.count":
                        return relation['/dex/processor/'].state.data.count
                default:
                    throw new Error('Invalid Action');
                    break
            }
        },
        data: {
            count: 0
        }
    }
}

components.set('/dex/processor/', relation['/dex/processor/'])

components.set('/docs/', {
    type: 'component',
    tag: (children) => `<api-main></api-main>`,
    template: (props) => `<slot name="lib-markdown"></slot>`
})

// components.set('/dex/processor/', {
//     type: 'component',
//     tag: (children) => `<slot name="lib-markdown"></slot>`,
// })

// components.set('/docs/', {
//     type: 'component',
//     tag: (children) => `<slot name="lib-markdown"></slot>`,
// })
/*
components.set('api-relation', {
    type: 'html',
    tag: (children) => ``,
    template: (props) => {
        return `
          <div class="api-matcher">
            <label class="api-matcher" for="api-set-order">
                ${props.title}
            </label>
            <input class="api-matcher" id="api-set-order" type="button">
          </div>`
    }})
*/

components.set('/dex/node/', {
    type: 'component',
    tag: (children) => `<api-main>${children ? children : '' }</api-main>`,
    template: (props) => {
        return `
          <div class="api-matcheть американские военные биолабоr">
            <label class="api-matcher" for="api-set-order">
                NODE Component
            </label>
            <div class="content"></div>
          </div>`}
})

components.set('/dex/', {
    type: 'component',
    tag: (children) => `<api-main></api-main>`,
    template: (props) => {
        return `
          <div id="item_fs" class="bid_item">
                    <label for="left"><input type="number" min="0" max="24000" id="left" value="10" /></label>
                    <div class="content">
                        <div class="info">
                            <p id="preview-left" class="preview"></p>
                            <div class="wrapper">
                                <div class="instrument">
                                    <p class="instrument_title">Instrument:</p>
                                    <p id="instrument_fs" class="instrument_data"></p>
                                </div>
                                <div class="timestamp_info">
                                    <p>Time:</p>
                                    <p id="timestamp_fs"></p>
                                </div>
                                <div class="timestamp_info">
                                    <p>Delta:</p>
                                    <p id="delta_fs"></p>
                                </div>
                                <div class="result">
                                    <div class="result-item fs_fs"></div>
                                    <div class="result-item fb_fs"></div>
                                    <div class="result-item sb_sf"></div>
                                    <div class="result-item sb_fs"></div>
                                </div>
                                <button style="color: #7876f4" class="stat" id="fs_fs"></button>
                                <button style="color: #398c3b" class="stat" id="fb_fs"></button>
                                <button style="color: #398c3b" class="stat" id="sb_sf"></button>
                                <button style="color: #d84141" class="stat" id="sb_fs"></button>
                            </div>
                        </div>
                        <div id="fs" class="orderbook">
                            <div>
                                <p class="orderbook_title">Bids</p>
                                <div id="bid_fs" class="bid">
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                </div>
                            </div>
                            <div>
                                <p class="orderbook_title">Asks</p>
                                <div id="ask_fs" class="ask">
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="item_st" class="bid_item">
                    <label for="center"><input type="number" min="0" max="24000" id="center" value="10"  /></label>
                    <div class="content">
                        <div class="info">
                            <p id="preview-center" class="preview"></p>
                            <div class="wrapper">
                                <div class="instrument">
                                   <p class="instrument_title">Instrument:</p>
                                   <p id="instrument_st" class="instrument_data"></p>
                                </div>
                                <div class="timestamp_info">
                                    <p>Time: </p>
                                    <p id="timestamp_st"></p>
                                </div>
                                <div class="timestamp_info">
                                    <p>Delta:</p>
                                    <p id="delta_st"></p>
                                </div>
                                <div class="result">
                                    <div class="result-item fb_ts"></div>
                                    <div class="result-item fb_st"></div>
                                    <div class="result-item ss_st"></div>
                                    <div class="result-item ss_ts"></div>
                                </div>
                                <button style="color: #d84141" class="stat" id="fb_ts"></button>
                                <button style="color: #d84141" class="stat" id="fb_st"></button>
                                <button style="color: #7876f4" class="stat" id="ss_st"></button>
                                <button style="color: #7876f4" class="stat" id="ss_ts"></button>
                            </div>
                        </div>
                        <div id="st" class="orderbook">
                            <div>
                                <p class="orderbook_title">Bids</p>
                                <div id="bid_st" class="bid">
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                </div>
                            </div>
                            <div>
                                <p class="orderbook_title">Asks</p>
                                <div id="ask_st" class="ask">
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item_ft" class="bid_item">
                    <label for="right"><input type="number" min="0" max="24000" id="right" value="10"  /></label>
                    <div class="content">
                        <div class="info">
                            <p id="preview-right" class="preview"></p>
                            <div class="wrapper">
                                <div class="instrument">
                                   <p class="instrument_title">Instrument:</p>
                                   <p id="instrument_ft" class="instrument_data"></p>
                                </div>
                                <div class="timestamp_info">
                                    <p>Time:</p>
                                    <p id="timestamp_ft"></p>
                                </div>
                                <div class="timestamp_info">
                                    <p>Delta:</p>
                                    <p id="delta_ft"></p>
                                </div>
                                <div class="result">
                                    <div class="result-item fb_ft"></div>
                                    <div class="result-item fs_ft"></div>
                                    <div class="result-item sb_ft"></div>
                                    <div class="result-item sb_tf"></div>
                                </div>
                                <button style="color: #398c3b" class="stat" id="fb_ft"></button>
                                <button style="color: #7876f4" class="stat" id="fs_ft"></button>
                                <button style="color: #d84141" class="stat" id="sb_ft"></button>
                                <button style="color: #398c3b" class="stat" id="sb_tf"></button>
                            </div>
                        </div>
                        <div id="ft" class="orderbook">
                            <div>
                                <p class="orderbook_title">Bids</p>
                                <div id="bid_ft" class="bid">
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                </div>
                            </div>
                            <div>
                                <p class="orderbook_title">Asks</p>
                                <div id="ask_ft" class="ask">
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                    <div class = item></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`}})

components.set('default', {
    type: 'component',
    tag: (children) => `<api-main>${children ? children : '' }</api-main>`,
    template: (props) => {
        let title = 'Not Found'
        let IMAGE_BINARY = 'AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbbv+DGW3/mRlt/5kZbf+ZGq6/hIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGa3/ohkt/7/Zbj//2S3/v9lt/6WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGm5/iRlt/74Zbj//2W4//9luP//Zbf++mi4/i4gIPciGhr24hsb9uwbG/bsGhr24CEh9xoAAAAAAAAAAAAAAABnuP5mZLf+/2W4//9luP//Zbj//2S3/v9muP5yGBj2rhMT9v8TE/b/ExP2/xMT9f8YGPWkAAAAAAAAAAAAAAAAb7z/BGW3/tZluP//Zbj//2W4//9lt/7gJzH3ShMT9f8TE/b/ExP2/xMT9v8TE/b/ExP1/CAg9joAAAAAAAAAAAAAAABmuP5GZLf+6GS3/uhkt/7oZbf+UhgY9YQSEvX/ExP2/xMT9v8TE/b/ExP2/xIS9f8aGvZ8AAAAAD4++gQgIPZ6IiL2hiIi9oYgIPZ8KCj5BAAAAAAtLfgUFBT17BMT9v8TE/b/ExP2/xMT9v8VFfXoLCz4DgAAAAAaGvZqEhL1/xMT9v8TE/b/EhL1/xsb9nIAAAAAAAAAABwc9m4SEvX/ExP2/xMT9v8SEvX/HR32ZAAAAAAnJ/gSFRX16hMT9v8TE/b/ExP2/xMT9v8UFPXuJyf4Fp2xlAKNnqUYLC/mfhYW83ATE/VuFxf1aDc3+gIAAAAAGBj1fhIS9f8TE/b/ExP2/xMT9v8TE/b/ExP1/xkZ9YaGn3yIhZ57/4Wee/+Gn3yKAAAAAAAAAAAAAAAAAAAAACMj9zYTE/X8ExP2/xMT9v8TE/b/ExP2/xMT9f9JUshihZ57+IaffP+Gn3z/hZ579oigfiYAAAAAAAAAAAAAAAAAAAAAGBj1oBIS9f8TE/b/ExP2/xMT9f8YGPWmiKB+PIWee/+Gn3z/hp98/4Wee/+HoH06AAAAAAAAAAAAAAAAAAAAACUl9xgVFfXOExP11BMT9dQUFPXQJib3HgAAAACGn3ymhp98/4affP+Gn3ymAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiKB+EIihf0CIoX9AiKB+EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AADg/wAA4MMAAOCBAADggQAA8QEAAOeBAADDwwAAgf8AAIAPAACBDwAAgQ8AAMMPAAD//wAA//8AAA=='
        let h1 = 'not found'
        let service = window.location.pathname
        return `
<style>
api-default {
  width: 100%;
}
hr {
  color: lightgray;
  width: 100%;
}
img {
  float: left;
  opacity: .8;
}
#box {
    background: transparent;
    border: 0.1vw solid lightgray;
    width: 100%;
    padding: 60px;
    margin: 0;
    box-sizing: border-box;
}
h1 {
  font-size: 130%;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
  margin-left: 48px;
}
h2 {
  font-size: 100%;
  font-weight: normal;
  border-bottom: 1px solid lightgray;
  margin-left: 48px;
}
ul {
  font-size: 80%;
  padding-left: 48px;
  margin: 0 0 0 0.85vw;
}
#reloadButton {
  padding-left: 48px;
}
</style>
  <div id="box">
    <img src="data:image/png;base64,${IMAGE_BINARY}" width="32" height="32"/>
    <h1>${h1}</h1>
    <h2>When connecting to: ${service}</h2>
    <ul>
      <li>Check the address for errors such as <b>ww</b>.example.com
      instead of <b>www</b>.example.com</li>
      <li>If the address is correct, try checking the network
      connection.</li>
      <li>If your computer or network is protected by a firewall or
      proxy, make sure that the browser demo is permitted to access
      the network.</li>
    </ul>
    <br/><br/>
  </div>`
}})

export const property_relation = components
export default components