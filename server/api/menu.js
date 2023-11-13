export default defineEventHandler((event) => {
  debugger
   console.log(event)
   
   return event.node.req
})