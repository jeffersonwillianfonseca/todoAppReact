import React from 'react'
import Grid from '../template/grid'
import IcconButton from '../template/icconButton'

export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IcconButton style='primary' icon='plus'></IcconButton>
        </Grid>
    </div>
)