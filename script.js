let html = ``;
let container = document.getElementById('countries');

async function loadCountries() {
    const url = "countries.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const countries = await response.json();

        countries.forEach(country => {
            html += `
            <div class="country-card">
                <div class="country-name-flag">
                    <img src="${country.flags.svg}" alt="" >
                    <h2>${country.name.common}</h2>
                </div> 
                <hr/>
                <div class="country-text"><i class='fa fa-globe'></i><p>Region: ${country.region}</p>
                <i class="fa fa-university"></i><p>Hl. město: ${country.capital}</p></div>
                <div class="country-text">
                <i class='fa fa-users'></i><p>Obyvatelé: ${country.population}</p>
                <i class='fa fa-map'></i><p>Rozloha: ${country.area} km²</p>
                </div>
                <div class="country-text">
                <i class='fa fa-language'></i><p>Jazyk: ${Object.values(country.languages).join(", ")}</p>
                <i class='fa fa-money'></i><p>Měna: ${Object.values(country.currencies).map(c => `${c.symbol} ${c.name}`).join(", ")}</p>
                </div>
                <div class="country-text-time"><i class='fa fa-clock-o'></i><p>Časové pásmo: ${country.timezones}</p></div>
            </div>
        `;
        })

        container.innerHTML = html;

        console.log(countries);
    } catch (error) {
        console.error(error.message);
    }
}

loadCountries();