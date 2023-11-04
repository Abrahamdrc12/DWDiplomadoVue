import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import Swal from 'sweetalert2';
import { string } from 'yup';
import axios from 'axios'

export const mainStore = defineStore('store', () => {
  // Abstraemos el proceso de listar o get de todos los elementos
  const endpoint = 'http://146.190.32.176/diplomado/api/';
  const get = async (param) => {
    const res = axios.get(endpoint + param).then((result) => {
      return result.data
    }).catch((err) => {
      return err.response.data.message
    });

    return res
  }
  const pop = async (id) => {
    const query = await fetch(endpoint + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
  }

  const send = async (param, data) => {
    const query = await fetch('http://146.190.32.176/diplomado/api/hotels/145',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    console.log(typeof (param))
  };

  const create = async (data) => {
    const query = await fetch('http://146.190.32.176/diplomado/api/hotels',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    console.log(query.json())
  };

  const alert = (icon, title) => {
    Swal.fire({
      icon: icon,
      title: title,
    });
  }
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { get, alert, send, pop, create }
})