<script lang="ts">

    async function sendMail (){
        fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify({
                from: 'you@example.com',
                to: 'user@gmail.com',
                subject: 'hello world',
                html: `<p>hello</p>`
            })
        })
    }
</script>

<button on:click={sendMail}>send</button>