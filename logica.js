			function callback() {
				var oResponse = this;
				var sResponseBody = oResponse.responseText;
				var oJSON = JSON.parse(sResponseBody);
				var sReais = oJSON.rates.BRL;

				var oUrl = new URL(location.href);
				var sValorOrigem = oUrl.searchParams.get("valor_origem");

				document.querySelector("#valor_destino").value = sReais * sValorOrigem;
			}

			function chamaAPI() {
				const sURL = "https://api.exchangeratesapi.io/latest";
				var oRequest = new XMLHttpRequest();
				oRequest.addEventListener("load", callback);
				oRequest.open("GET", sURL);
				oRequest.send();
			}