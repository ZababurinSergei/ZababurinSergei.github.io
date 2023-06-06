import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty_t.mjs'
import emoji from '/static/html/components/component_modules/emoji/emoji.mjs'
import Recursion from '/static/html/components/component_modules/recursion/recursion.mjs'
import treeBundle from '/static/html/components/component_modules/recursion/module/tree-bundle.mjs'
import Waves from '/static/html/components/component_modules/waves/module/waves-bundle.mjs'

function bestCopyEver(src) {
    return Object.assign({}, src);
}
export default (views,property,color,substrate,relation)=>{
    return  new Promise(async (resolve, reject) => {
        color = 'action'
        let waves = await Waves.default
        let  recursion = await  Recursion()
        switch (relation.toLowerCase()) {
            case 'bank':
                    if(isEmpty(substrate[`${relation}`])){
                        console.warn(`${emoji('kissing_heart')} waves,mjs ${emoji('kissing_heart')} субстрат не определён --->`,  substrate)
                    }else{
                        let dAppData = {}
                        switch (substrate[`${relation}`]['/']) {
                            case 'bank':
                                dAppData = await waves['transactions']['nodeInteraction'].accountData(substrate[`${relation}`]['property']['dapp'], substrate[`${relation}`]['property']['testnodes'])
                                break
                            default:
                                console.warn(`действие не обрабтывается ${emoji('kissing_heart')}`, substrate[`${relation}`]['/'], substrate)
                                break

                        }
                        document.dispatchEvent( new CustomEvent('connected-bank', {
                            detail: {
                                '/':`${substrate[`${relation}`]['/']}`,
                                dAppData:dAppData
                            }
                        }))
                        resolve(dAppData)
                    }
                break
            case 'wallet':
                if(isEmpty(substrate[`${relation}`])){
                    console.warn(`${emoji('kissing_heart')} субстрат не определён --->`,  views,property,color,substrate,relation)
                }else{
                    let user = {};
                    let balances = {};
                    let seed = {}
                    switch (substrate[`${relation}`]['/']) {
                        case 'wallet':
                            seed = waves['libs'].crypto.randomSeed(15);
                            // console.log('seed', seed)
                            // console.assert(false, substrate[`${relation}`]['property']['testnodes'])
                            const signer = new waves['Signer']['default']({
                                NODE_URL: substrate[`${relation}`]['property']['testnodes']
                            });
                            signer.setProvider(new waves['ProviderSeed']['default'](seed))
                            user = await signer.login();
                            balances = await signer.getBalance();
                            break
                        default:
                            console.warn(`действие не обрабтывается ${emoji('kissing_heart')}`, substrate[`${relation}`]['/'], substrate)
                            break

                    }
                    document.dispatchEvent( new CustomEvent('created-wallet', {
                        detail: {
                            '/':`${substrate[`${relation}`]['/']}`,
                            wallet:{
                                user:user,
                                balances:balances,
                                seed:seed,
                            }
                        }
                    }))
                    resolve(true)
                }
                break
            case 'save-wallet':
                if(isEmpty(substrate[`${relation}`])){
                    console.warn(`${emoji('kissing_heart')} субстрат не определён --->`,  views,property,color,substrate,relation)
                    resolve(true)
                }else {
                    switch (substrate[`${relation}`]['/']) {
                        case 'addEventListener':
                            for(let key in substrate[`${relation}`])
                            switch (key) {
                                case'items':
                                    switch (substrate[`${relation}`][key]) {
                                        case'saveGitHubEnd':
                                            document.addEventListener('saveGitHubEnd', async (e)=>{
                                                window.opener.postMessage({status:'true'}, 'http://localhost:7030')
                                                window.close()
                                            })
                                            break
                                        case'githubAuthEnd':
                                            document.addEventListener('githubAuthEnd', async (e)=>{
                                                document.dispatchEvent( new CustomEvent('connectRepo', {
                                                    detail: {
                                                        _:'connectGoogle',
                                                    }
                                                }))
                                            })
                                            break
                                        default:
                                            // console.warn(`${emoji('dancing_women')} waves.mjs действие не обрабтывается ${emoji('dancing_women')}`,key,'-->',substrate[`${relation}`][key])
                                            break
                                    }
                                    break
                                default:
                                    // console.warn(`${emoji('dancing_women')} waves.mjs действие не обрабтывается ${emoji('dancing_women')}`,key,'-->',substrate[`${relation}`][key])
                                    break
                            }
                            break
                        case 'dispatchEvent':
                            document.dispatchEvent( new CustomEvent('connectGitHub', {
                                detail: {
                                    _:'connectGoogle',
                                }
                            }))
                            break
                        default:
                            console.warn(`действие не обрабтывается waves.mjs ${emoji('kissing_heart')}`, substrate[`${relation}`]['/'], substrate)
                            break
                    }
                    resolve(true)
                }
                break
            default:
                console.warn(`${emoji('kissing_heart')} waves.mjs нет обработчика --->`, relation.toLowerCase(), '[(' ,views,property,color,substrate,relation ,')a]')
                break
        }
        resolve({ key:true})
    })
}

//             document.dispatchEvent( new CustomEvent('connectGitHub', {
//                 detail: {
//                     _:'connectGoogle',
//                 }
//             }))
//             document.addEventListener('githubAuthEnd',async (e)=>{
//                 document.dispatchEvent( new CustomEvent('connectRepo', {
//                     detail: {
//                         _:'connectGoogle',
//                     }
//                 }))
//
//             })
//
//             document.addEventListener('saveGitHubEnd', async (e)=>{
//                 window.opener.postMessage({file:'true'}, 'http://localhost:7030/')
//                 window.close()
//         })
//     }