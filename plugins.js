
async function getEmailText(subject = null, to = null) {
    const config = {
        user: 'xxx',
        password: 'xxxx',
        host: 'xxxx',
        port: 143,
        tls: false,
        authTimeout: 3000, 
        tlsOptions: { rejectUnauthorized: false }
    };
    
    const opts = {
        imap: config
    };

    const connection = await new Promise((resolve, reject) => {
        require("imap").connect(opts, (err, con) => {
            if (err) {
                reject(err);
            } else {
                resolve(con);
            }
        });
    });

    await connection.openBox("inbox");

    const fetchOptions = {
        bodies: ['HEADER', 'TEXT'],
        markSeen: false
    };

    let messages = [];
    const criterias = buildCriterias(subject, to);
    messages = await connection.search(criterias, fetchOptions);
    connection.end();

    const body = atob(messages[0].parts[1].body);    
    return body;
}

on('task', {
    sendMail({ subject, to }) {
      return getEmailText(subject, to);
    }
  });