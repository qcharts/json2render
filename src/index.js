export default function render(json) {
  let obj = json
  if (typeof json !== 'object') {
    try {
      obj = JSON.parse(json)
    } catch (e) {
      console.error(e)
    }
  }
}
