const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window'); 

const hp = percentage =>{
    // Convert percentage to pixels and return it
 return (percentage * deviceHeight) / 100;
}
const wp = percentage =>{
    // Convert percentage to pixels and return it
 return (percentage * deviceWidth) / 100;
}