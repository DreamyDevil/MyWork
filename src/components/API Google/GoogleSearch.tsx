import React from 'react'
import { Button, Card, Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { useRootStore } from './ProviderRootStore'




export const GoogleSearch = observer(() => {
  const { updateGoogle, requestGoogle, query_param_google, content_from_google$ } = useRootStore()

  return (
    <div className='content' style={ { padding: 24, textAlign: 'center' } }>
      <Input value={ query_param_google } onChange ={ (e) => updateGoogle(e.target.value)}/>
      <Button onClick={ () => requestGoogle() }>
        Search
      </Button>
      {
        content_from_google$.map((content,index) => {
          return(
            <Card key={ index } title={ content.title } style={ { width: 1000 } }>
              { content.description }
              { content.link }
            </Card>
          )
        })
      }
    </div>
  )
})


