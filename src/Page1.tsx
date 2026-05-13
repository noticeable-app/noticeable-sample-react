import { useEffect } from 'react'

import { config } from './config'

export default function Page1() {
  useEffect(() => {
    window.noticeable.render('widget', config.noticeable.newspageEmbedWidgetId, {
      selector: '#noticeable-newspage-embed',
    })

    return () => {
      window.noticeable.destroy('widget', config.noticeable.newspageEmbedWidgetId)
    }
  }, [])

  return <div id="noticeable-newspage-embed" style={{ width: '100%' }}></div>
}
