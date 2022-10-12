# Käyttäjät-CRUD

Tässä repositoriossa on React/Redux -projekti käyttäjähallintasovelluksesta. Sovellukseen on jo toteutettu:

* Redux-store ja Kayttajat-slice oletussisältöineen
* Kayttaja-interface
* Kayttajalista-komponentti, joka tulostaa Redux-storessa olevan sisällön
* Käyttöliittymäelementit (ikoni-napit) lisäys-, muokkaus- tai poistotoiminnallisuuksien käynnistämiseen

Tehtävänäsi on osallistua projektiin toteuttamalla sovellukseen **joko** lisäys-, muokkaus- **tai** poistotoiminnallisuus. **Vain yksi toiminnallisuus/tiimin jäsen**.

### Vaatimukset ja rajoitteet tekniseen toteukseen:

* Jokainen toiminnallisuus (lisäys, muokkaus, poisto): 
  * toteututaan omana React-komponenttinaan
  * käsitellään käyttöliittymässä MUI:n Dialogi-komponentilla. Esim. poistoista kysytään vahvistus omassa dialogissaan
* Käyttöliittymässä sovelletaan MUI-komponentteja sekä Material Icons -ikoneita. Ulkoasun tulisi säilyä yhtenäisenä eri näkymien välillä.
* App- tai Kayttajalista-komponentteja tai Store-hakemistossa olevia Redux-määrityksiä voi (ja täytyy) muokata. Ole kuitenkin tarkkana yhdistämiskonfliktien varalta!
