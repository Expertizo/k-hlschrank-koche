import React, { Component } from 'react';
import {Divider, GridList, GridTile, IconButton} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 50
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        width: 500,
        overflowX: 'auto',
        padding: 20
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

const image = 'https://res-1.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_256,q_90,w_384/v1445427268/es_trenc_95l_wlurjj.jpg'

const tilesData = [
    {
        img: image,
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: image,
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: image,
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: image,
        title: 'Breakd',
        author: 'jill111',
    },
    {
        img: image,
        title: 'Tastyd',
        author: 'pashminu',
    },
    {
        img: image,
        title: 'Cameda',
        author: 'Danson67',
    }
];

export default class FruitList extends Component {

    constructor(props) {
        super(props);
    }

    render () {
       return (
           <div style={styles.root}>

               <GridList style={styles.gridList} cols={4}>
                   {tilesData.map((tile) => (
                       <GridTile
                           key={tile.title}
                           title={tile.title}
                           actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                           titleStyle={styles.titleStyle}
                           cols={5}
                           titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                           >
                           <img src={tile.img} />
                       </GridTile>
                   ))}
               </GridList>
           </div>
        );
    }
}