const tf = require('@tensorflow/tfjs');
/*
async function loadModel() {
    const model = await tf.loadLayersModel('model/model.json');

    print('model loaded')
    return model;
}

loadModel();*/

tf.loadLayersModel('https://storage.googleapis.com/johnthas-dog-breeds/tfjs/model/model.json')
.then(model => {
    console.log('model loaded');
})
.catch(err => {
    console.log(err);
});
