// utils/imageUtils.js
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

let modelPromise;

export async function loadModel() {
  if (!modelPromise) {
    modelPromise = mobilenet.load();
  }
  return modelPromise;
}

export async function getImageEmbedding(imageElement) {
  const model = await loadModel();
  const tensor = model.infer(imageElement, true); // feature vector
  return tensor;
}

export async function cosineSimilarity(tensorA, tensorB) {
  const dot = tf.sum(tf.mul(tensorA, tensorB));
  const normA = tf.norm(tensorA);
  const normB = tf.norm(tensorB);
  const similarity = dot.div(normA.mul(normB));
  return (await similarity.data())[0];
}
