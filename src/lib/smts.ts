interface MailDef {
    Host: string;
    Username: string;
    Password: string;
    To: string | string[];
    From: string;
    Subject: string;
    Body: string;
    Action?: string;
    Attachments?: Record<string, unknown>[]; 
    nocache?: number
}

type AjaxFunction = (res?: string) => void;
export default class Email {

    static send(mail: MailDef) {
      return new Promise(resolve => {
        mail.nocache = Math.floor(1e6 * Math.random() + 1)
        mail.Action = "Send";
        const _mail = JSON.stringify(mail);
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", _mail, e => {
          resolve(e);
        });
      });
    };

    private static ajaxPost (url: string | URL, body: Document | XMLHttpRequestBodyInit | null | undefined, callback: AjaxFunction) {
      const a = Email.createCORSRequest("POST", url);
      a?.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        (a!.onload =  () => {
          const e = a?.responseText;
          null != callback && callback(e);
        }),
        a?.send(body);
    };

    // static ajax (e, n) {
    //   var t = Email.createCORSRequest("GET", e);
    //   (t.onload = function () {
    //     var e = t.responseText;
    //     null != n && n(e);
    //   }),
    //     t.send();
    // };

    private static createCORSRequest (method: string, url: string | URL) {
      let req: XMLHttpRequest | null = new XMLHttpRequest();
      return (
        "withCredentials" in req
          ? req.open(method, url, !0)
          : (req = null),
        req
      );
    }
  }
  