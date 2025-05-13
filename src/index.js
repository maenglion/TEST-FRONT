// src/index.js
export default {
  async fetch(request) {
    return new Response("Hello, LOZEE!", { status: 200 });
  }
}