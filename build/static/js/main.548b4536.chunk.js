(this["webpackJsonpChromeBot-Website"] =
  this["webpackJsonpChromeBot-Website"] || []).push([
  [0],
  {
    22: function(e, t, a) {
      e.exports = a(34);
    },
    23: function(e, t, a) {},
    24: function(e, t, a) {},
    34: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a(2),
        o = a(4),
        i = a(3),
        s = a(5),
        c = (a(23), a(24), a(0)),
        l = a.n(c),
        u = a(18),
        m = a.n(u),
        h = a(19),
        p = a(10),
        d = (function(e) {
          function t(e) {
            var a;
            Object(n.a)(this, t);
            var r = !1,
              s = "",
              c = (a = Object(o.a)(this, Object(i.a)(t).call(this, e))).unpress;
            return (
              e.disabled && (r = !0),
              e.destructive
                ? (s = "destructive")
                : e.important
                ? (s = "important")
                : e.special
                ? (s = "special")
                : e.ugly && (s = "ugly"),
              e.onClick && (c = e.onClick),
              (a.state = {
                pressed: !1,
                disabled: r,
                type: s,
                onClick: c
              }),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "unpress",
                value: function() {
                  console.log("unpressing"), this.setState({ pressed: !1 });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return this.state.disabled
                    ? l.a.createElement(
                        "button",
                        {
                          className: "button disabled"
                        },
                        this.props.children
                      )
                    : this.state.pressed
                    ? l.a.createElement(
                        "button",
                        {
                          className: "button pressed " + this.state.type
                        },
                        this.props.children
                      )
                    : l.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            e.setState({ pressed: !0 }), e.state.onClick(e);
                          },
                          className: "button " + this.state.type
                        },
                        this.props.children
                      );
                }
              }
            ]),
            t
          );
        })(c.Component),
        b = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = {
                errorType: e.code,
                errorMessage: e.description
              }),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      { className: "page one variant2" },
                      l.a.createElement(
                        "div",
                        { className: "textblock" },
                        "Hey, that's an error ",
                        this.state.errorType,
                        ".",
                        l.a.createElement("br", null),
                        this.state.errorMessage,
                        "."
                      ),
                      l.a.createElement(
                        d,
                        {
                          important: !0,
                          onClick: function(e) {
                            return (window.location.href = "/");
                          }
                        },
                        "Back To Home"
                      ),
                      l.a.createElement(
                        d,
                        {
                          destructive: !0,
                          onClick: function(e) {
                            return (window.location.href =
                              "https://github.com/chromebot-websites/chromebot.cf/issues");
                          }
                        },
                        "Report a bug if you believe this is in issue"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "page two variant2" },
                      l.a.createElement(
                        "div",
                        { className: "textblock variant2" },
                        "Website made by ",
                        l.a.createElement(
                          "a",
                          {
                            href: "https://github.com/minion3665"
                          },
                          "@Minion3665"
                        ),
                        " on github"
                      ),
                      l.a.createElement(
                        "div",
                        { className: "textblock variant2" },
                        "Discord server made by ",
                        l.a.createElement(
                          "a",
                          {
                            href: "https://github.com/chromebook777"
                          },
                          "@Chromebook777"
                        ),
                        " on github"
                      ),
                      l.a.createElement(
                        "div",
                        { className: "textblock variant2" },
                        "Minon's slave ",
                        l.a.createElement(
                          "a",
                          {
                            href: "https://github.com/vilagamer999"
                          },
                          "@Vilagamer9999"
                        ),
                        " on github"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        f = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = {
                color: "grey",
                message: "getting the latest data",
                timeoutId: null
              }),
              (a.xmlhttp = new XMLHttpRequest()),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  (this.xmlhttp.onreadystatechange = function() {
                    if (
                      4 === e.xmlhttp.readyState &&
                      200 === e.xmlhttp.status
                    ) {
                      var t = JSON.parse(e.xmlhttp.responseText);
                      if (t)
                        if (t[e.props.botId]) {
                          var a = t[e.props.botId];
                          "offline" === a.status
                            ? e.setState({
                                color: "red",
                                message: "Offline",
                                height: 9
                              })
                            : "idle" === a.status
                            ? e.setState({
                                color: "#AF7E00",
                                message: "experiencing a Minor Outage"
                              })
                            : "dnd" === a.status
                            ? e.setState({
                                color: "#c65b29",
                                message: "experiencing a Major Outage"
                              })
                            : e.setState({
                                color: "#6CB83A",
                                message: "operational"
                              });
                        } else
                          e.setState({
                            color: "red",
                            message: "not in server",
                            height: 9
                          });
                      else;
                      setTimeout(function() {
                        e.xmlhttp.open(
                          "GET",
                          "https://bartergame.cf/extras/bot/api/get/users?ts=" +
                            new Date().getTime(),
                          !0
                        ),
                          e.xmlhttp.send();
                      }, 5e3);
                    }
                  }),
                    this.xmlhttp.open(
                      "GET",
                      "https://bartergame.cf/extras/bot/api/get/users?ts=" +
                        new Date().getTime(),
                      !0
                    ),
                    this.xmlhttp.send();
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.timeoutId && clearTimeout(this.timeoutId),
                    this.xmlhttp.abort();
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      {
                        className: "statusBox",
                        style: {
                          backgroundColor: this.state.color
                        }
                      },
                      l.a.createElement(
                        "b",
                        { className: "title status" },
                        this.props.botName,
                        " is currently",
                        " ",
                        l.a.createElement(
                          "span",
                          { className: "highlight" },
                          this.state.message
                        ),
                        "."
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        g = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = {
                color: "#c23b3b",
                barColor: "grey",
                percentage: 100,
                message: "Detecting the bots that are online..."
              }),
              (a.xmlhttp = new XMLHttpRequest()),
              (a.timeoutId = null),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  (this.xmlhttp.onreadystatechange = function() {
                    if (
                      4 === e.xmlhttp.readyState &&
                      200 === e.xmlhttp.status
                    ) {
                      var t = 0,
                        a = JSON.parse(e.xmlhttp.responseText);
                      e.props.searchForMembers.forEach(function(e) {
                        a[e] && "offline" !== a[e].status && t++;
                      });
                      var n = Math.floor(
                        (t / e.props.searchForMembers.length) * 100
                      );
                      100 === n
                        ? e.setState({
                            percentage: n,
                            barColor: "#10690d",
                            color: "#10690d",
                            message: n.toString() + "% of the bots are online"
                          })
                        : e.setState({
                            percentage: n,
                            barColor: "#10690d",
                            color: "#c23b3b",
                            message: n.toString() + "% of the bots are online"
                          }),
                        (e.timeoutId = setTimeout(function() {
                          e.xmlhttp.open(
                            "GET",
                            "https://bartergame.cf/extras/bot/api/get/users?ts=" +
                              new Date().getTime(),
                            !0
                          ),
                            e.xmlhttp.send();
                        }, 5e3));
                    }
                  }),
                    this.xmlhttp.open(
                      "GET",
                      "https://bartergame.cf/extras/bot/api/get/users?ts=" +
                        new Date().getTime(),
                      !0
                    ),
                    this.xmlhttp.send();
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.timeoutId && clearTimeout(this.timeoutId),
                    this.xmlhttp.abort();
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      {
                        id: "percentbarOuter",
                        style: {
                          backgroundColor: this.state.color
                        }
                      },
                      l.a.createElement(
                        "div",
                        { id: "percentbarInnerText" },
                        this.state.message
                      ),
                      l.a.createElement("div", {
                        id: "percentbarInner",
                        style: {
                          width: this.state.percentage.toString() + "%",
                          backgroundColor: this.state.barColor
                        }
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        E = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "b",
                      { className: "title right" },
                      "Bots"
                    ),
                    l.a.createElement(g, {
                      serverId: "480959345601937410",
                      searchForMembers: [
                        "499262934715727872",
                        "555361766947815424",
                        "599743179608293398"
                      ]
                    }),
                    l.a.createElement(
                      "div",
                      { className: "centerContainer" },
                      l.a.createElement(f, {
                        botName: "Chromebot",
                        botId: "499262934715727872",
                        serverId: "480959345601937410"
                      }),
                      l.a.createElement(f, {
                        botName: "Chromebot Canary",
                        botId: "555361766947815424",
                        serverId: "480959345601937410"
                      })
                    ),
                    l.a.createElement(
                      "div",
                      { className: "centerContainer" },
                      l.a.createElement(f, {
                        botName: "Chromebot Manager",
                        botId: "599743179608293398",
                        serverId: "480959345601937410"
                      })
                    ),
                    l.a.createElement("div", {
                      id: "bot-invite",
                      className: "link"
                    }),
                    l.a.createElement(
                      "b",
                      { className: "title" },
                      "Invite the bots"
                    ),
                    l.a.createElement(
                      d,
                      {
                        onClick: function(e) {
                          (window.location.href =
                            "https://discordapp.com/oauth2/authorize?client_id=499262934715727872&permissions=2146958847&scope=bot"),
                            e.unpress();
                        }
                      },
                      "Invite Chromebot"
                    ),
                    l.a.createElement(
                      d,
                      {
                        destructive: !0,
                        onClick: function(e) {
                          (window.location.href =
                            "https://discordapp.com/oauth2/authorize?client_id=555361766947815424&permissions=2146958847&scope=bot"),
                            e.unpress();
                        }
                      },
                      "Invite Chromebot Canary (Chromebot Canary may be unstable)"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        v = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = {
                logo: null,
                sticky: null,
                allowStick: !1
              }),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "stick",
                value: function() {
                  if (
                    (console.log(window.pageYOffset),
                    window.pageYOffset >= this.state.sticky)
                  ) {
                    if (!this.state.allowStick) return;
                    this.state.logo.parentElement.childNodes.forEach(function(
                      e
                    ) {
                      e.classList.add("sticky");
                    }),
                      Array.from(
                        document.getElementsByClassName("link")
                      ).forEach(function(e) {
                        e.classList.add("sticky");
                      }),
                      document.body.classList.add("sticky"),
                      this.state.logo.parentElement.classList.add(
                        "stickyContainer"
                      );
                  } else {
                    if (!this.state.allowUnStick) return;
                    this.state.logo.parentElement.childNodes.forEach(function(
                      e
                    ) {
                      e.classList.remove("sticky");
                    }),
                      Array.from(
                        document.getElementsByClassName("link")
                      ).forEach(function(e) {
                        e.classList.remove("sticky");
                      }),
                      document.body.classList.remove("sticky"),
                      this.state.logo.parentElement.classList.remove(
                        "stickyContainer"
                      );
                  }
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  this.stick();
                }
              },
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.setState({
                    logo: document.getElementById("logo"),
                    sticky: document.getElementById("logo").offsetTop,
                    allowStick: !0,
                    allowUnStick: !0
                  }),
                    (window.onscroll = function() {
                      e.stick();
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "video",
                        {
                          className: "logo",
                          id: "logo",
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          playsInline: !0
                        },
                        l.a.createElement("source", {
                          src: "videos/icon-rotate.webm.unreal",
                          type: "video/webm"
                        }),
                        l.a.createElement("source", {
                          src: "videos/icon-rotate.mp4.unreal",
                          type: "video/mp4"
                        })
                      ),
                      l.a.createElement(
                        d,
                        {
                          important: !0,
                          onClick: function(e) {
                            (window.location.href =
                              "https://discordapp.com/invite/77NM8VQ"),
                              e.unpress();
                          }
                        },
                        "Join The Server"
                      ),
                      l.a.createElement(
                        d,
                        {
                          onClick: function(e) {
                            (window.location.href = "#bot-invite"), e.unpress();
                          }
                        },
                        "Invite The Bots"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        y = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "feature" },
                    l.a.createElement(
                      "div",
                      { className: "emote" },
                      this.props.icon
                    ),
                    this.props.title,
                    l.a.createElement(
                      "div",
                      { className: "content" },
                      this.props.description
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        k = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "b",
                      { className: "title right" },
                      "Features"
                    ),
                    l.a.createElement(y, {
                      icon: "\ud83d\udcad",
                      title: "Knowledge",
                      description:
                        "Want to find out about a user? Just run the userinfo command and check out the information"
                    }),
                    l.a.createElement(y, {
                      icon: "\ud83c\udfb2",
                      title: "Fun",
                      description:
                        "Want to play dice? What about choosing an option from a set of them? Have fun with chromebot in your server"
                    }),
                    l.a.createElement(y, {
                      icon: "\u2753",
                      title: "Need help?",
                      description:
                        "Need more information? We have a dedicated bot to help you use chromebot. Join the support server and run ?support"
                    }),
                    l.a.createElement(y, {
                      icon: "\ud83d\udcc8",
                      title: "Uptime",
                      description:
                        "ChromeBot is almost always online to help your server. All issues are quickly reported to help you stay online even when we're down"
                    }),
                    l.a.createElement(y, {
                      icon: "\u2699\ufe0f",
                      title: "In Development",
                      description:
                        "New features are always being added and issues are being fixed quickly. This ensures that you have a useful, working, bot in your server"
                    })
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        w = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(v, null),
                    l.a.createElement(E, null),
                    l.a.createElement(k, null)
                  );
                }
              }
            ]),
            t
          );
        })(c.Component),
        O = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = {
                error: null
              }),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "componentDidCatch",
                value: function(e, t) {
                  this.setState({ error: e });
                }
              },
              {
                key: "render",
                value: function() {
                  return this.state.error
                    ? "Hi. I'm Minion3665. If you can see this then the website is dead. Properly dead. Please create a new issue at https://github.com/chromebook777-productions/chromebot.cf/issues with the title 'I got a supererror'. I am not going to link anywhere for fear of breaking stuff further, as if this error boundary breaks then I have nothing left. If you want to go back to the main page then go to https://chromebot.cf.Thanks, Minion3665/"
                    : l.a.createElement(j, null, this.props.children);
                }
              }
            ]),
            t
          );
        })(c.Component),
        j = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = {
                error: null
              }),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "componentDidCatch",
                value: function(e, t) {
                  this.setState({ error: e });
                }
              },
              {
                key: "render",
                value: function() {
                  return this.state.error
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(b, {
                          code: "601",
                          description:
                            "An unknown error occured. Who knows what this one means..."
                        })
                      )
                    : this.props.children;
                }
              }
            ]),
            t
          );
        })(c.Component),
        C = O;
      console.log(
        "Welcome to the chromebot website. This is client build BR.0.01."
      );
      var N = (function(e) {
        function t() {
          return (
            Object(n.a)(this, t),
            Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(s.a)(t, e),
          Object(r.a)(t, [
            {
              key: "render",
              value: function() {
                return l.a.createElement(
                  C,
                  null,
                  l.a.createElement(
                    h.a,
                    null,
                    l.a.createElement(
                      p.c,
                      null,
                      l.a.createElement(p.a, {
                        exact: !0,
                        path: "/",
                        component: w
                      }),
                      l.a.createElement(p.a, {
                        path: "/christmas",
                        render: function() {
                          return l.a.createElement(
                            l.a.Fragment,
                            null,
                            l.a.createElement(
                              d,
                              {
                                important: !0
                              },
                              "Minion3665, Vilagamer999 and The ChromeBot Staff..."
                            ),
                            l.a.createElement(
                              d,
                              {
                                special: !0
                              },
                              l.a.createElement(
                                "span",
                                {
                                  role: "img",
                                  "aria-label": "santa"
                                },
                                "\ud83c\udf85"
                              ),
                              " Would like to wish you a merry christmas!",
                              l.a.createElement(
                                "span",
                                {
                                  role: "img",
                                  "aria-label": "santa"
                                },
                                "\ud83c\udf85"
                              )
                            ),
                            l.a.createElement("br", null),
                            l.a.createElement(
                              d,
                              {
                                destructive: !0,
                                onClick: function(e) {
                                  return (window.location.href =
                                    "https://chromebot.cf");
                                }
                              },
                              "Go Back Home"
                            )
                          );
                        }
                      }),
                      l.a.createElement(p.a, {
                        path: "/status ",
                        render: function() {
                          return l.a.createElement(
                            l.a.Fragment,
                            null,
                            l.a.createElement(
                              d,
                              {
                                destructive: !0,
                                onClick: function(e) {
                                  return (window.location.href =
                                    "https://chromebot.cf");
                                }
                              },
                              "Go Back Home"
                            ),
                            l.a.createElement(E, null)
                          );
                        }
                      }),
                      l.a.createElement(p.a, {
                        path: "/join",
                        render: function() {
                          return (
                            (window.location.href =
                              "https://discordapp.com/invite/77NM8VQ"),
                            l.a.createElement(
                              l.a.Fragment,
                              null,
                              l.a.createElement(
                                "div",
                                {
                                  className: "textblock"
                                },
                                "We're redirecting you now..."
                              ),
                              l.a.createElement(
                                d,
                                {
                                  important: !0,
                                  onClick: function(e) {
                                    window.location.href =
                                      "https://discordapp.com/invite/77NM8VQ";
                                  }
                                },
                                " ",
                                "Not Being Redirected ?",
                                " "
                              )
                            )
                          );
                        }
                      }),
                      l.a.createElement(p.a, {
                        path: "/egg",
                        render: function() {
                          return l.a.createElement(
                            l.a.Fragment,
                            null,
                            l.a.createElement(
                              d,
                              {
                                destructive: !0
                              },
                              "Yay you found an easter egg..."
                            ),
                            l.a.createElement(
                              d,
                              {
                                destructive: !0
                              },
                              "Not much to see here though..."
                            ),
                            l.a.createElement(
                              d,
                              {
                                special: !0
                              },
                              ":)"
                            ),
                            l.a.createElement(
                              d,
                              {
                                important: !0
                              },
                              " idk lol"
                            ),
                            l.a.createElement(
                              d,
                              {
                                ugly: !0,
                                onClick: function(e) {
                                  return (window.location.href =
                                    "https://raw.githubusercontent.com/chromebot-websites/chromebot.cf/master/public/images/2AA15818-B987-4253-AA6B-74BBE74173D6.jpeg");
                                }
                              },
                              " ",
                              "10/10 best button"
                            )
                          );
                        }
                      }),
                      l.a.createElement(p.a, {
                        path: "/web/:ts/:method//chromebot.cf/:path*",
                        render: function() {
                          return l.a.createElement(
                            d,
                            {
                              special: !0,
                              onClick: function(e) {
                                (window.location = "https://chromebot.cf"),
                                  e.unpress();
                              }
                            },
                            "Hello archive.org user. Click me to go to the real website"
                          );
                        }
                      }),
                      l.a.createElement("br", null),
                      l.a.createElement(p.a, {
                        render: function() {
                          return l.a.createElement(b, {
                            code: "404",
                            description:
                              "The requested resource was not found on the chromebot support website"
                          });
                        }
                      })
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(c.Component);
      m.a.render(l.a.createElement(N, null), document.getElementById("root"));
    }
  },
  [[22, 1, 2]]
]);
//# sourceMappingURL=main.548b4536.chunk.js.map