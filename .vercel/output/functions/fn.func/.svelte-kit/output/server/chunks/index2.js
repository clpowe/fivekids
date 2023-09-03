let T = false;
const _ = [], S = (i) => new Promise((t, e) => {
  if (typeof window > "u" || (window.storyblokRegisterEvent = (r) => {
    if (window.location === window.parent.location) {
      console.warn("You are not in Draft Mode or in the Visual Editor.");
      return;
    }
    T ? r() : _.push(r);
  }, document.getElementById("storyblok-javascript-bridge")))
    return;
  const s = document.createElement("script");
  s.async = true, s.src = i, s.id = "storyblok-javascript-bridge", s.onerror = (r) => e(r), s.onload = (r) => {
    _.forEach((o) => o()), T = true, t(r);
  }, document.getElementsByTagName("head")[0].appendChild(s);
});
var P = Object.defineProperty, C = (i, t, e) => t in i ? P(i, t, { enumerable: true, configurable: true, writable: true, value: e }) : i[t] = e, h = (i, t, e) => (C(i, typeof t != "symbol" ? t + "" : t, e), e);
function j(i) {
  return !(i !== i || i === 1 / 0 || i === -1 / 0);
}
function A(i, t, e) {
  if (!j(t))
    throw new TypeError("Expected `limit` to be a finite number");
  if (!j(e))
    throw new TypeError("Expected `interval` to be a finite number");
  const s = [];
  let r = [], o = 0;
  const n = function() {
    o++;
    const a = setTimeout(function() {
      o--, s.length > 0 && n(), r = r.filter(function(u) {
        return u !== a;
      });
    }, e);
    r.indexOf(a) < 0 && r.push(a);
    const l = s.shift();
    l.resolve(i.apply(l.self, l.args));
  }, c = function(...a) {
    const l = this;
    return new Promise(function(u, p) {
      s.push({
        resolve: u,
        reject: p,
        args: a,
        self: l
      }), o < t && n();
    });
  };
  return c.abort = function() {
    r.forEach(clearTimeout), r = [], s.forEach(function(a) {
      a.reject(function() {
        Error.call(this, "Throttled function aborted"), this.name = "AbortError";
      });
    }), s.length = 0;
  }, c;
}
class y {
  constructor() {
    h(this, "isCDNUrl", (t = "") => t.indexOf("/cdn/") > -1), h(this, "getOptionsPage", (t, e = 25, s = 1) => ({
      ...t,
      per_page: e,
      page: s
    })), h(this, "delay", (t) => new Promise((e) => setTimeout(e, t))), h(this, "arrayFrom", (t = 0, e) => [...Array(t)].map(e)), h(this, "range", (t = 0, e = t) => {
      const s = Math.abs(e - t) || 0, r = t < e ? 1 : -1;
      return this.arrayFrom(s, (o, n) => n * r + t);
    }), h(this, "asyncMap", async (t, e) => Promise.all(t.map(e))), h(this, "flatMap", (t = [], e) => t.map(e).reduce((s, r) => [...s, ...r], [])), h(this, "escapeHTML", function(t) {
      const e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, s = /[&<>"']/g, r = RegExp(s.source);
      return t && r.test(t) ? t.replace(s, (o) => e[o]) : t;
    });
  }
  /**
   * @method stringify
   * @param  {Object} params
   * @param  {String} prefix
   * @param  {Boolean} isArray
   * @return {String} Stringified object
   */
  stringify(t, e, s) {
    const r = [];
    for (const o in t) {
      if (!Object.prototype.hasOwnProperty.call(t, o))
        continue;
      const n = t[o], c = s ? "" : encodeURIComponent(o);
      let a;
      typeof n == "object" ? a = this.stringify(
        n,
        e ? e + encodeURIComponent("[" + c + "]") : c,
        Array.isArray(n)
      ) : a = (e ? e + encodeURIComponent("[" + c + "]") : c) + "=" + encodeURIComponent(n), r.push(a);
    }
    return r.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {String} regionCode region code, could be eu, us or cn
   * @return {String} The base URL of the region
   */
  getRegionURL(t) {
    const e = "api.storyblok.com", s = "api-us.storyblok.com", r = "app.storyblokchina.cn";
    switch (t) {
      case "us":
        return s;
      case "cn":
        return r;
      default:
        return e;
    }
  }
}
const O = function(i, t) {
  const e = {};
  for (const s in i) {
    const r = i[s];
    t.indexOf(s) > -1 && r !== null && (e[s] = r);
  }
  return e;
}, N = (i) => i === "email", L = () => ({
  singleTag: "hr"
}), M = () => ({
  tag: "blockquote"
}), z = () => ({
  tag: "ul"
}), H = (i) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: i.attrs
    }
  ]
}), U = () => ({
  singleTag: "br"
}), q = (i) => ({
  tag: `h${i.attrs.level}`
}), B = (i) => ({
  singleTag: [
    {
      tag: "img",
      attrs: O(i.attrs, ["src", "alt", "title"])
    }
  ]
}), V = () => ({
  tag: "li"
}), J = () => ({
  tag: "ol"
}), D = () => ({
  tag: "p"
}), F = (i) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": i.attrs.name,
        emoji: i.attrs.emoji
      }
    }
  ]
}), Y = () => ({
  tag: "b"
}), K = () => ({
  tag: "strike"
}), W = () => ({
  tag: "u"
}), G = () => ({
  tag: "strong"
}), Q = () => ({
  tag: "code"
}), X = () => ({
  tag: "i"
}), Z = (i) => {
  const t = new y().escapeHTML, e = { ...i.attrs }, { linktype: s = "url" } = i.attrs;
  if (e.href && (e.href = t(i.attrs.href || "")), N(s) && (e.href = `mailto:${e.href}`), e.anchor && (e.href = `${e.href}#${e.anchor}`, delete e.anchor), e.custom) {
    for (const r in e.custom)
      e[r] = e.custom[r];
    delete e.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: e
      }
    ]
  };
}, tt = (i) => ({
  tag: [
    {
      tag: "span",
      attrs: i.attrs
    }
  ]
}), et = () => ({
  tag: "sub"
}), st = () => ({
  tag: "sup"
}), rt = (i) => ({
  tag: [
    {
      tag: "span",
      attrs: i.attrs
    }
  ]
}), ot = (i) => {
  var t;
  return (t = i.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${i.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, it = (i) => {
  var t;
  return (t = i.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${i.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, nt = {
  nodes: {
    horizontal_rule: L,
    blockquote: M,
    bullet_list: z,
    code_block: H,
    hard_break: U,
    heading: q,
    image: B,
    list_item: V,
    ordered_list: J,
    paragraph: D,
    emoji: F
  },
  marks: {
    bold: Y,
    strike: K,
    underline: W,
    strong: G,
    code: Q,
    italic: X,
    link: Z,
    styled: tt,
    subscript: et,
    superscript: st,
    anchor: rt,
    highlight: ot,
    textStyle: it
  }
}, at = function(i) {
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, e = /[&<>"']/g, s = RegExp(e.source);
  return i && s.test(i) ? i.replace(e, (r) => t[r]) : i;
};
class b {
  constructor(t) {
    h(this, "marks"), h(this, "nodes"), t || (t = nt), this.marks = t.marks || [], this.nodes = t.nodes || [];
  }
  addNode(t, e) {
    this.nodes[t] = e;
  }
  addMark(t, e) {
    this.marks[t] = e;
  }
  render(t, e = { optimizeImages: false }) {
    if (t && t.content && Array.isArray(t.content)) {
      let s = "";
      return t.content.forEach((r) => {
        s += this.renderNode(r);
      }), e.optimizeImages ? this.optimizeImages(s, e.optimizeImages) : s;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`
    ), "";
  }
  optimizeImages(t, e) {
    let s = 0, r = 0, o = "", n = "";
    typeof e != "boolean" && (typeof e.width == "number" && e.width > 0 && (o += `width="${e.width}" `, s = e.width), typeof e.height == "number" && e.height > 0 && (o += `height="${e.height}" `, r = e.height), (e.loading === "lazy" || e.loading === "eager") && (o += `loading="${e.loading}" `), typeof e.class == "string" && e.class.length > 0 && (o += `class="${e.class}" `), e.filters && (typeof e.filters.blur == "number" && e.filters.blur >= 0 && e.filters.blur <= 100 && (n += `:blur(${e.filters.blur})`), typeof e.filters.brightness == "number" && e.filters.brightness >= -100 && e.filters.brightness <= 100 && (n += `:brightness(${e.filters.brightness})`), e.filters.fill && (e.filters.fill.match(/[0-9A-Fa-f]{6}/g) || e.filters.fill === "transparent") && (n += `:fill(${e.filters.fill})`), e.filters.format && ["webp", "png", "jpeg"].includes(e.filters.format) && (n += `:format(${e.filters.format})`), typeof e.filters.grayscale == "boolean" && e.filters.grayscale && (n += ":grayscale()"), typeof e.filters.quality == "number" && e.filters.quality >= 0 && e.filters.quality <= 100 && (n += `:quality(${e.filters.quality})`), e.filters.rotate && [90, 180, 270].includes(e.filters.rotate) && (n += `:rotate(${e.filters.rotate})`), n.length > 0 && (n = "/filters" + n))), o.length > 0 && (t = t.replace(/<img/g, `<img ${o.trim()}`));
    const c = s > 0 || r > 0 || n.length > 0 ? `${s}x${r}${n}` : "";
    return t = t.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${c}`
    ), typeof e != "boolean" && (e.sizes || e.srcset) && (t = t.replace(/<img.*?src=["|'](.*?)["|']/g, (a) => {
      var l, u;
      const p = a.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g
      );
      if (p && p.length > 0) {
        const g = {
          srcset: (l = e.srcset) == null ? void 0 : l.map((d) => {
            if (typeof d == "number")
              return `//${p}/m/${d}x0${n} ${d}w`;
            if (typeof d == "object" && d.length === 2) {
              let v = 0, R = 0;
              return typeof d[0] == "number" && (v = d[0]), typeof d[1] == "number" && (R = d[1]), `//${p}/m/${v}x${R}${n} ${v}w`;
            }
          }).join(", "),
          sizes: (u = e.sizes) == null ? void 0 : u.map((d) => d).join(", ")
        };
        let k = "";
        return g.srcset && (k += `srcset="${g.srcset}" `), g.sizes && (k += `sizes="${g.sizes}" `), a.replace(/<img/g, `<img ${k.trim()}`);
      }
      return a;
    })), t;
  }
  renderNode(t) {
    const e = [];
    t.marks && t.marks.forEach((r) => {
      const o = this.getMatchingMark(r);
      o && o.tag !== "" && e.push(this.renderOpeningTag(o.tag));
    });
    const s = this.getMatchingNode(t);
    return s && s.tag && e.push(this.renderOpeningTag(s.tag)), t.content ? t.content.forEach((r) => {
      e.push(this.renderNode(r));
    }) : t.text ? e.push(at(t.text)) : s && s.singleTag ? e.push(this.renderTag(s.singleTag, " /")) : s && s.html ? e.push(s.html) : t.type === "emoji" && e.push(this.renderEmoji(t)), s && s.tag && e.push(this.renderClosingTag(s.tag)), t.marks && t.marks.slice(0).reverse().forEach((r) => {
      const o = this.getMatchingMark(r);
      o && o.tag !== "" && e.push(this.renderClosingTag(o.tag));
    }), e.join("");
  }
  renderTag(t, e) {
    return t.constructor === String ? `<${t}${e}>` : t.map((s) => {
      if (s.constructor === String)
        return `<${s}${e}>`;
      {
        let r = `<${s.tag}`;
        if (s.attrs)
          for (const o in s.attrs) {
            const n = s.attrs[o];
            n !== null && (r += ` ${o}="${n}"`);
          }
        return `${r}${e}>`;
      }
    }).join("");
  }
  renderOpeningTag(t) {
    return this.renderTag(t, "");
  }
  renderClosingTag(t) {
    return t.constructor === String ? `</${t}>` : t.slice(0).reverse().map((e) => e.constructor === String ? `</${e}>` : `</${e.tag}>`).join("");
  }
  getMatchingNode(t) {
    const e = this.nodes[t.type];
    if (typeof e == "function")
      return e(t);
  }
  getMatchingMark(t) {
    const e = this.marks[t.type];
    if (typeof e == "function")
      return e(t);
  }
  renderEmoji(t) {
    if (t.attrs.emoji)
      return t.attrs.emoji;
    const e = [
      {
        tag: "img",
        attrs: {
          src: t.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(e, " /");
  }
}
class lt {
  constructor(t) {
    h(this, "baseURL"), h(this, "timeout"), h(this, "headers"), h(this, "responseInterceptor"), h(this, "fetch"), h(this, "ejectInterceptor"), h(this, "url"), h(this, "parameters"), this.baseURL = t.baseURL, this.headers = t.headers || new Headers(), this.timeout = t != null && t.timeout ? t.timeout * 1e3 : 0, this.responseInterceptor = t.responseInterceptor, this.fetch = (...e) => t.fetch ? t.fetch(...e) : fetch(...e), this.ejectInterceptor = false, this.url = "", this.parameters = {};
  }
  /**
   *
   * @param url string
   * @param params ISbStoriesParams
   * @returns Promise<ISbResponse | Error>
   */
  get(t, e) {
    return this.url = t, this.parameters = e, this._methodHandler("get");
  }
  post(t, e) {
    return this.url = t, this.parameters = e, this._methodHandler("post");
  }
  put(t, e) {
    return this.url = t, this.parameters = e, this._methodHandler("put");
  }
  delete(t, e) {
    return this.url = t, this.parameters = e, this._methodHandler("delete");
  }
  async _responseHandler(t) {
    const e = [], s = {
      data: {},
      headers: {},
      status: 0,
      statusText: ""
    };
    t.status !== 204 && await t.json().then((r) => {
      s.data = r;
    });
    for (const r of t.headers.entries())
      e[r[0]] = r[1];
    return s.headers = { ...e }, s.status = t.status, s.statusText = t.statusText, s;
  }
  async _methodHandler(t) {
    let e = `${this.baseURL}${this.url}`, s = null;
    if (t === "get") {
      const a = new y();
      e = `${this.baseURL}${this.url}?${a.stringify(
        this.parameters
      )}`;
    } else
      s = JSON.stringify(this.parameters);
    const r = new URL(e), o = new AbortController(), { signal: n } = o;
    let c;
    this.timeout && (c = setTimeout(() => o.abort(), this.timeout));
    try {
      const a = await this.fetch(`${r}`, {
        method: t,
        headers: this.headers,
        body: s,
        signal: n
      });
      this.timeout && clearTimeout(c);
      const l = await this._responseHandler(a);
      return this.responseInterceptor && !this.ejectInterceptor ? this._statusHandler(this.responseInterceptor(l)) : this._statusHandler(l);
    } catch (a) {
      return {
        message: a
      };
    }
  }
  eject() {
    this.ejectInterceptor = true;
  }
  _statusHandler(t) {
    const e = /20[0-6]/g;
    return new Promise((s) => {
      if (e.test(`${t.status}`))
        return s(t);
      const r = {
        message: t.statusText,
        status: t.status,
        response: Array.isArray(t.data) ? t.data[0] : t.data.error || t.data.slug
      };
      throw new Error(JSON.stringify(r));
    });
  }
}
const x = "SB-Agent", w = {
  defaultAgentName: "SB-JS-CLIENT",
  defaultAgentVersion: "SB-Agent-Version",
  packageVersion: "5.14.2"
};
let m = {};
const f = {};
class ct {
  /**
   *
   * @param config ISbConfig interface
   * @param endpoint string, optional
   */
  constructor(t, e) {
    h(this, "client"), h(this, "maxRetries"), h(this, "throttle"), h(this, "accessToken"), h(this, "cache"), h(this, "helpers"), h(this, "resolveCounter"), h(this, "relations"), h(this, "links"), h(this, "richTextResolver"), h(this, "resolveNestedRelations");
    let s = t.endpoint || e;
    if (!s) {
      const n = new y().getRegionURL, c = t.https === false ? "http" : "https";
      t.oauthToken ? s = `${c}://${n(t.region)}/v1` : s = `${c}://${n(t.region)}/v2`;
    }
    const r = new Headers();
    if (r.set("Content-Type", "application/json"), r.set("Accept", "application/json"), t.headers)
      for (const n in t.headers)
        r.set(n, t.headers[n]);
    r.has(x) || (r.set(x, w.defaultAgentName), r.set(
      w.defaultAgentVersion,
      w.packageVersion
    ));
    let o = 5;
    t.oauthToken && (r.set("Authorization", t.oauthToken), o = 3), t.rateLimit && (o = t.rateLimit), t.richTextSchema ? this.richTextResolver = new b(t.richTextSchema) : this.richTextResolver = new b(), t.componentResolver && this.setComponentResolver(t.componentResolver), this.maxRetries = t.maxRetries || 5, this.throttle = A(this.throttledRequest, o, 1e3), this.accessToken = t.accessToken || "", this.relations = {}, this.links = {}, this.cache = t.cache || { clear: "manual" }, this.helpers = new y(), this.resolveCounter = 0, this.resolveNestedRelations = t.resolveNestedRelations || true, this.client = new lt({
      baseURL: s,
      timeout: t.timeout || 0,
      headers: r,
      responseInterceptor: t.responseInterceptor,
      fetch: t.fetch
    });
  }
  setComponentResolver(t) {
    this.richTextResolver.addNode("blok", (e) => {
      let s = "";
      return e.attrs.body && e.attrs.body.forEach((r) => {
        s += t(r.component, r);
      }), {
        html: s
      };
    });
  }
  parseParams(t) {
    return t.version || (t.version = "published"), t.token || (t.token = this.getToken()), t.cv || (t.cv = f[t.token]), Array.isArray(t.resolve_relations) && (t.resolve_relations = t.resolve_relations.join(",")), t;
  }
  factoryParamOptions(t, e) {
    return this.helpers.isCDNUrl(t) ? this.parseParams(e) : e;
  }
  makeRequest(t, e, s, r) {
    const o = this.factoryParamOptions(
      t,
      this.helpers.getOptionsPage(e, s, r)
    );
    return this.cacheResponse(t, o);
  }
  get(t, e) {
    e || (e = {});
    const s = `/${t}`, r = this.factoryParamOptions(s, e);
    return this.cacheResponse(s, r);
  }
  async getAll(t, e, s) {
    const r = (e == null ? void 0 : e.per_page) || 25, o = `/${t}`, n = o.split("/"), c = s || n[n.length - 1], a = 1, l = await this.makeRequest(o, e, r, a), u = l.total ? Math.ceil(l.total / r) : 1, p = await this.helpers.asyncMap(
      this.helpers.range(a, u),
      (g) => this.makeRequest(o, e, r, g + 1)
    );
    return this.helpers.flatMap(
      [l, ...p],
      (g) => Object.values(g.data[c])
    );
  }
  post(t, e) {
    const s = `/${t}`;
    return Promise.resolve(this.throttle("post", s, e));
  }
  put(t, e) {
    const s = `/${t}`;
    return Promise.resolve(this.throttle("put", s, e));
  }
  delete(t, e) {
    const s = `/${t}`;
    return Promise.resolve(this.throttle("delete", s, e));
  }
  getStories(t) {
    return this.get("cdn/stories", t);
  }
  getStory(t, e) {
    return this.get(`cdn/stories/${t}`, e);
  }
  getToken() {
    return this.accessToken;
  }
  ejectInterceptor() {
    this.client.eject();
  }
  _cleanCopy(t) {
    return JSON.parse(JSON.stringify(t));
  }
  _insertLinks(t, e, s) {
    const r = t[e];
    r && r.fieldtype == "multilink" && r.linktype == "story" && typeof r.id == "string" && this.links[s][r.id] ? r.story = this._cleanCopy(this.links[s][r.id]) : r && r.linktype === "story" && typeof r.uuid == "string" && this.links[s][r.uuid] && (r.story = this._cleanCopy(this.links[s][r.uuid]));
  }
  _insertRelations(t, e, s, r) {
    if (s.indexOf(`${t.component}.${e}`) > -1) {
      if (typeof t[e] == "string")
        this.relations[r][t[e]] && (t[e] = this._cleanCopy(
          this.relations[r][t[e]]
        ));
      else if (t[e] && t[e].constructor === Array) {
        const o = [];
        t[e].forEach((n) => {
          this.relations[r][n] && o.push(this._cleanCopy(this.relations[r][n]));
        }), t[e] = o;
      }
    }
  }
  iterateTree(t, e, s) {
    const r = (o) => {
      if (o != null) {
        if (o.constructor === Array)
          for (let n = 0; n < o.length; n++)
            r(o[n]);
        else if (o.constructor === Object) {
          if (o._stopResolving)
            return;
          for (const n in o)
            (o.component && o._uid || o.type === "link") && (this._insertRelations(
              o,
              n,
              e,
              s
            ), this._insertLinks(
              o,
              n,
              s
            )), r(o[n]);
        }
      }
    };
    r(t.content);
  }
  async resolveLinks(t, e, s) {
    let r = [];
    if (t.link_uuids) {
      const o = t.link_uuids.length, n = [], c = 50;
      for (let a = 0; a < o; a += c) {
        const l = Math.min(o, a + c);
        n.push(t.link_uuids.slice(a, l));
      }
      for (let a = 0; a < n.length; a++)
        (await this.getStories({
          per_page: c,
          language: e.language,
          version: e.version,
          by_uuids: n[a].join(",")
        })).data.stories.forEach(
          (l) => {
            r.push(l);
          }
        );
    } else
      r = t.links;
    r.forEach((o) => {
      this.links[s][o.uuid] = {
        ...o,
        _stopResolving: true
      };
    });
  }
  async resolveRelations(t, e, s) {
    let r = [];
    if (t.rel_uuids) {
      const o = t.rel_uuids.length, n = [], c = 50;
      for (let a = 0; a < o; a += c) {
        const l = Math.min(o, a + c);
        n.push(t.rel_uuids.slice(a, l));
      }
      for (let a = 0; a < n.length; a++)
        (await this.getStories({
          per_page: c,
          language: e.language,
          version: e.version,
          by_uuids: n[a].join(",")
        })).data.stories.forEach((l) => {
          r.push(l);
        });
    } else
      r = t.rels;
    r && r.length > 0 && r.forEach((o) => {
      this.relations[s][o.uuid] = {
        ...o,
        _stopResolving: true
      };
    });
  }
  async resolveStories(t, e, s) {
    var r, o;
    let n = [];
    if (this.links[s] = {}, this.relations[s] = {}, typeof e.resolve_relations < "u" && e.resolve_relations.length > 0 && (typeof e.resolve_relations == "string" && (n = e.resolve_relations.split(",")), await this.resolveRelations(t, e, s)), e.resolve_links && ["1", "story", "url", "link"].indexOf(e.resolve_links) > -1 && ((r = t.links) != null && r.length || (o = t.link_uuids) != null && o.length) && await this.resolveLinks(t, e, s), this.resolveNestedRelations)
      for (const c in this.relations[s])
        this.iterateTree(
          this.relations[s][c],
          n,
          s
        );
    t.story ? this.iterateTree(t.story, n, s) : t.stories.forEach((c) => {
      this.iterateTree(c, n, s);
    }), delete this.links[s], delete this.relations[s];
  }
  async cacheResponse(t, e, s) {
    (typeof s > "u" || !s) && (s = 0);
    const r = this.helpers.stringify({ url: t, params: e }), o = this.cacheProvider();
    if (this.cache.clear === "auto" && e.version === "draft" && await this.flushCache(), e.version === "published" && t != "/cdn/spaces/me") {
      const n = await o.get(r);
      if (n)
        return Promise.resolve(n);
    }
    return new Promise(async (n, c) => {
      var a;
      try {
        const l = await this.throttle("get", t, e);
        if (l.status !== 200)
          return c(l);
        let u = { data: l.data, headers: l.headers };
        if ((a = l.headers) != null && a["per-page"] && (u = Object.assign({}, u, {
          perPage: l.headers["per-page"] ? parseInt(l.headers["per-page"]) : 0,
          total: l.headers["per-page"] ? parseInt(l.headers.total) : 0
        })), u.data.story || u.data.stories) {
          const p = this.resolveCounter = ++this.resolveCounter % 1e3;
          await this.resolveStories(u.data, e, `${p}`);
        }
        return e.version === "published" && t != "/cdn/spaces/me" && await o.set(r, u), u.data.cv && e.token && (e.version == "draft" && f[e.token] != u.data.cv && await this.flushCache(), f[e.token] = u.data.cv), n(u);
      } catch (l) {
        if (l.response && l.response.status === 429 && (s = s ? s + 1 : 0, s < this.maxRetries))
          return console.log(`Hit rate limit. Retrying in ${s} seconds.`), await this.helpers.delay(1e3 * s), this.cacheResponse(t, e, s).then(n).catch(c);
        c(l.message);
      }
    });
  }
  throttledRequest(t, e, s) {
    return this.client[t](e, s);
  }
  cacheVersions() {
    return f;
  }
  cacheVersion() {
    return f[this.accessToken];
  }
  setCacheVersion(t) {
    this.accessToken && (f[this.accessToken] = t);
  }
  cacheProvider() {
    switch (this.cache.type) {
      case "memory":
        return {
          get(t) {
            return Promise.resolve(m[t]);
          },
          getAll() {
            return Promise.resolve(m);
          },
          set(t, e) {
            return m[t] = e, Promise.resolve(void 0);
          },
          flush() {
            return m = {}, Promise.resolve(void 0);
          }
        };
      case "custom":
        if (this.cache.custom)
          return this.cache.custom;
      default:
        return {
          get() {
            return Promise.resolve(void 0);
          },
          getAll() {
            return Promise.resolve(void 0);
          },
          set() {
            return Promise.resolve(void 0);
          },
          flush() {
            return Promise.resolve(void 0);
          }
        };
    }
  }
  async flushCache() {
    return await this.cacheProvider().flush(), this;
  }
}
const ut = (i = {}) => {
  const { apiOptions: t } = i;
  if (!t.accessToken) {
    console.error(
      "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
    );
    return;
  }
  return { storyblokApi: new ct(t) };
};
let $;
const E = "https://app.storyblok.com/f/storyblok-v2-latest.js", gt = (i = {}) => {
  var u, p;
  const {
    bridge: t,
    accessToken: e,
    use: s = [],
    apiOptions: r = {},
    richText: o = {}
  } = i;
  r.accessToken = r.accessToken || e;
  const n = { bridge: t, apiOptions: r };
  let c = {};
  s.forEach((g) => {
    c = { ...c, ...g(n) };
  });
  const l = !(typeof window > "u") && ((p = (u = window.location) == null ? void 0 : u.search) == null ? void 0 : p.includes("_storyblok_tk"));
  return t !== false && l && S(E), $ = new b(o.schema), o.resolver && I($, o.resolver), c;
}, I = (i, t) => {
  i.addNode("blok", (e) => {
    let s = "";
    return e.attrs.body.forEach((r) => {
      s += t(r.component, r);
    }), {
      html: s
    };
  });
};
let storyblokApiInstance = null;
const useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.log(`You can't use getStoryblokApi if you're not loading apiPlugin.`);
  }
  return storyblokApiInstance;
};
const storyblokInit = (options) => {
  const { storyblokApi } = gt(options);
  storyblokApiInstance = storyblokApi;
  options.components || {};
};
export {
  ut as a,
  storyblokInit as s,
  useStoryblokApi as u
};