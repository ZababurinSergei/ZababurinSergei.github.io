import { state, activeClass, setTime } from '../../api-substrate/external/index.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'

export default (self) => {
  return new Promise(async (resolve, reject) => {
   
    console.log('api-jira', self)
    resolve(self)
  })
}