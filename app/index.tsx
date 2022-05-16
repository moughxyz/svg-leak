import { render } from 'preact'
import { ModelView } from './View'
import { Model } from './Model'

const start = async function startApplication() {
  const model = new Model()

  const renderApp = () => {
    const element = <ModelView model={model} />
    render(element, document.body.appendChild(document.createElement('div')))
  }

  const domReady = document.readyState === 'complete' || document.readyState === 'interactive'
  if (domReady) {
    renderApp()
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      renderApp()
    })
  }
}

start().catch(console.error)
