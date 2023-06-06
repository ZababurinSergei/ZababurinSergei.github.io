export default (props) => {

const { highlight_json, raw_object } = props

    return `
    <!doctype html>
<!--
    This is an HTML rendering of the ConceptNet API response.

    We're showing you HTML so you get convenient syntax highlighting and links,
    because we think you're seeing this in a Web browser, based on your
    'Accept: text/html' header.

    If you're using a client that isn't a Web browser, you probably wanted pure
    JSON. In that case, set the header 'Accept: */*' or 'Accept:
    application/json' on your request, or add the '?format=json' parameter.
-->
<html>
<head>
  <title>ConceptNet 5 API</title>
  <style>
    .highlight pre {
      color: #062873;
      font-size: 12pt;
      font-weight: bold;
    }
    .highlight .err { border: 1px solid #f00 } /* Error */
    .highlight .s { 
      color: #002070; 
      font-weight: lighter;
    }
    
    .highlight .s2 + span  { 
      color: #4070a0;
      font-weight: lighter;
    }
    
    .highlight .s21 { 
      color: #4070a0;
      font-weight: lighter;
    }
    
    .highlight .nt { color: #062873; font-weight: bold } /* Name.Tag */
    .highlight .mf  + span { 
      color: #40a070;
      font-weight: lighter;
    }
    
    .highlight .json + span  { 
      color: #c50;
      font-weight: lighter;
    }
  </style>
</head>
<body class="highlight">
<pre>${highlight_json}</pre>

<div class="raw-json-link">
</div>
<script type="application/ld+json">
  ${raw_object}
</script>
<script type="module">
  const object = ${raw_object}
  console.log('!!!!!!!!!!!!!!!!', )
</script>
</body>
</html>
`}