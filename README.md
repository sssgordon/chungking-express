# Phill Simple

A simpel opinionated starter to build a headles shopify store with the JAMstack of 99kB and utilize all shopify fuctionality.

> ⚠️ Currently no multiple currencies support out of the box

## Features

**Gatsby site that has all shopify theme options(99kb js)**

- 👨‍💻 TYPESCRIPT
- 🛒 Shopping Cart create powered by Shopify Buy SDK
- 💆‍♀️ Headless Account Managements via `/account/*` with Netlify functions
- 📸 gatsby-image
- ✨ Easy styling with VW
- 🔧 SEO component
- 🧰 Contentful Richtext component
- 🚀 No redux we use context for state managemennt
- 💯 Google performance of 100 out of the box

## To do

- [ ] Tag manager
- [ ] Multicurrency
- [ ] Change adress in account
- [ ] Add adress to account
- [ ] Social login

## Doc

- [Setup](#Setup)
- [Styling](#Styling)
- [Components](#Components)
- [Hooks](#Hooks)
  - [Layout hooks](#Layout-hooks)
  - [Shop hooks](#Shop-hooks)
  - [User hooks](#User-hooks)

## Setup

1. Setup shopify store and create [storefront API key](https://shopify.dev/docs/storefront-api/getting-started)
2. Setup contentful space and get the acces [ID & token](https://www.contentful.com/developers/docs/references/authentication/)
   1. Create an contentmodel called Home
   2. Add an image in the media libary(otherwise an error will occur).
3. Setup a new gatsby project `gatsby new PROJECT_NAME https://github.com/askphill/phill-simple`
4. Create new github & do initial commit
5. Add env variables to project
6. Setup netlify site with all `.env` variables
7. Test your setup by adding a storefront id of the product in the `storefrontID` on the homepage and add to cart!😃

> ⚠️ If you dont want to use the acount pages and functionalty remove:
> `src/hooks/user`, `src/pages/account.tsx`, `src/components/account`, `src/components/account`, `src/netlify-functions` & `netlify.toml`,

### env file:

You will need a .development and .production env file with the following credentials

```
CONTENTFUL_ID=1z6zjvxt0xg3 //the contentfull space id
CONTENTFUL_ACCESS_TOKEN=EOJCLy4DEP3_KRXsCvI9WSEUSVDwEG9lZPL7ojN4cbI //Contentfull acces token
SHOPIFY_STORE=headless-demo-store //Shopify store before .myshopify.com handle
SHOPIFY_ACCES_TOKEN=6d8ab10cb0eb69c943d7614d756e44a4  //Storefront api key
FUNCTIONS_DOMAIN=fill-buysdk //Netlify before .netlify.com handle
```

Do `npm install` and `gatsby develop` the project should be working. On `home.tsx` you can change the `storefrontID` of a product in the connected shopify account to see if the cart works.

## Styling

There is no styling tool implemented but advised would be to use one of these 3:

- [Linaria](https://github.com/silvenon/gatsby-plugin-linaria) for 0kb extra js on runtime.
- [Emotion](https://emotion.sh/docs/introduction) Little bit smaller then SC.
- [SC](https://styled-components.com/) The standard.

All advised libaries use the `styled` atribute. There is already a styles folder with some props in `src/styles` and there you can find the VW calculator: `mobileVW` and `desktopVW`. You need to change the initial size of the caluclation to the design width. For example when the mobile design is 750px wide, the forumla needs to be: `export const mobileVW = px => { return(px / 750) * 100}vw`. Same for the desktop. To use this function, just pass in the px value.

Example:

```javascript
import { mobileVW, desktopVW, desktopBreakpoint } from '../styles'

const Button = styled.button`
  margin: ${mobileVW(16)}; // margin is 16px on the mobile design

  @media (min-width: ${desktopBreakpoint}) {
    margin: ${desktopVW(16)}; // margin is 16px on the desktop design
  }
`
```

Add all extra variables in this file, we already added some standards like: `ease`, `color`.

## Components

### Account

The account page is generated without `gatsby-node` and you can find it in `pages/` if you want to change the extension for example to `user` you need to change the page name but also need to change it in the `gatsby-config` files. If you want to generate it with a content model, you need to transer the pageff b to `templates` folder and put it in the `gatsby-node`. The current account page generates all basic functionality: login, register, logout, order history, activate account, forgot password, reset password. All components can be found and edited in `components/account`. For more info please see the [user hooks](#User-hooks).

### Cart

There is a simple example cart that can be extended in `layout/Cart`. See [cart hooks](#Cart-hooks) for more info.

### SEO

Use the SEO in components/shared for each page. You can input: `title`, `description` & `image`. `image` needs to be a url, so if it is from contentful use the `file { url }` in the query.

```javascript
import SEO from '../components/shared/SEO'

return <SEO title={seoTitle} description={seoDescription} />
```

### LinkType

Use the LinkType in components/shared for all links. Just pass everything what you would normally pass to a [gatsby Link](https://www.gatsbyjs.org/docs/gatsby-link/). Usecase for this is making links easily multilingual in a later stage of the project or adding effects like page transition.

```javascript
import LinkType from '../components/shared/LinkType'

return <LinkType to={'/'}>Home</LinkType>
```

### RichText

You can use the RichText component to render richtext from contentful. Just pass in the json.

```javascript
import RichText from '../components/shared/RichText'

return <RichText json={json} />
```

## Hooks

The main features of this starter are the hooks that you can use. The hooks are divided in `shop`, `user` & `layout`. The hooks are found in `src/hooks`.

**Layout hooks:** Hooks to see the layout state of cart and menu. Can easily be extened in the context.tsx and hooks added in `hooks/layout`.

- [useLayout](#Layout-hooks)
- [useToggleCart](#Layout-hooks)
- [useToggleMenu](#Layout-hooks)

**Shop hooks:**
The hooks that are used to add items to cart and go to cart

- [useCart](<#useCart()>)
- [useCartItems](<#useCartItems()>)
- [useCartCount](<#useCartCount()>)
- [useCheckoutUrl](<#useCheckoutUrl()>)
- [useAddItemsToCart](<#useAddItemsToCart()>)
- [useAddItemToCart](<#useAddItemToCart()>)
- [useRemoveItemsFromCart](<#useRemoveItemsFromCart()>)
- [useRemoveItemFromCart](<#useRemoveItemFromCart()>)
- [useUpdateItemQuantity](<#useUpdateItemQuantity()>)

**Shop escape hooks:** In addition to the normal hooks, there are two 'escape' hooks. These hooks allow access to setting the cart state and the client object that is used to interact with Shopify. It's important to note that these are considered experiemental–using these hooks may result in unintended side-effects.

- [useClientUnsafe](<#useClientUnsafe()>)
- [useSetCartUnsafe](<#useSetCartUnsafe()>)

**User hooks:** All hooks that are needed to manage the user identety from shopify. To use these hooks you need the netlify functions to work

- [useCustomer](<#useCustomer()>)
- [useLoginCustomer](<#useLoginCustomer()>)
- [useLogoutCustomer](<#useLogoutCustomer()>)
- [useForgetPasswordCustomer](<#useForgetPasswordCustomer()>)
- [useRegisterCustomer](<#useRegisterCustomer()>)
- [useActivateCustomer](<#useActivateCustomer()>)
- [useResetPasswordCustomer](<#useResetPasswordCustomer()>)

## Layout hooks

### useLayout(), useToggleCart() & useToggleMenu()

The `useLayout()` hook. This hooks checks the layout state. The function returns a `cartIsOpen` and `menuIsOpen` in a `boolean`. The `useToggleCart()` and `useToggleMenu()` return a function and with that you can toggle the state of the cart or the menu.

```javascript
import { useToggleCart, useToggleMenu, useLayout } from '../../hooks'

const header = () => {
  const toggleCart = useToggleCart()
  const toggleMenu = useToggleMenu()
  const { cartIsOpen, menuIsOpen } = useLayout()

  return(
     <header>
      <LinkType to='/'>Fill Simple</LinkType>
      <Cart visible={cartIsOpen} />
      <Menu visible={menuIsOpen}>
      <button onClick={() => toggleMenu()}>
        {menuIsOpen ? 'Close menu' : 'Open menu'}
      </button>
      <button onClick={() => toggleCart()}>
        {cartIsOpen ? 'Close cart' : 'Open cart'}
      </button>
      <LinkType to='account'>account</LinkType>
    </header>
  )
}
```

## Shop hooks

### useCart()

The most basic hook is the `useCart()` hook. This hook gives you access to the current cart state (or null, if there is no cart state). From this object you can get access to the line items, the total amounts, and additional checkout-related information.

```javascript
import React from 'react'
import { useCart } from '../hooks'

const ExampleUseCart = () => {
  const cart = useCart()
  const cartDate = new Date(cart.createdAt).toLocaleDateString()

  return (
    <p>
      {cart && (
        <div>
          Your cart was created on {cartDate}.
          <br />
          You have ${cart.totalPrice} worth of products in your cart.
        </div>
      )}
    </p>
  )
}
```

### useCartItems()

The `useCartItems()` hook provides access to the items currently in the cart. This hook always returns an array.

```javascript
import React from 'react'
import { useCartItems } from '../hooks'

const ExampleUseCartItems = () => {
  const cartItems = useCartItems()

  if (cartItems.length < 1) {
    return <p>Your cart is empty.</p>
  }

  return (
    <>
      <p>Your cart has the following items:</p>
      <ul>
        {cartItems.map(lineItem => (
          <li key={lineItem.title}>
            {lineItem.title} - {lineItem.variant.title}
          </li>
        ))}
      </ul>
    </>
  )
}
```

### useCartCount()

The `useCartCount()` hook provides the number of items currently in the cart. This hook returns 0 if the cart is null (and will always return a number). This method does not return just `cartItems.length`, but sums the quantity of each variant in the cart.

```javascript
import React from 'react'
import { useCartCount } from '../hooks'

const ExampleUseCartCount = () => {
  const cartCount = useCartCount()

  return <p>Your cart has {cartCount} items.</p>
}
```

### useCheckoutUrl()

The `useCheckoutUrl()` hook provides the checkout url that is associated with the current cart. It returns `null` when the cart is `null`, and otherwise returns a `string`.

```javascript
import React from 'react'
import { useCheckoutUrl } from '../hooks'

const ExampleUseCheckoutUrl = () => {
  const checkoutUrl = useCheckoutUrl()

  return checkoutUrl == null ? (
    <p>There is no active checkout.</p>
  ) : (
    <p>
      <a href={checkoutUrl} target='_blank' rel='noopener noreferrer'>
        Complete Your Order →
      </a>
    </p>
  )
}
```

### useAddItemsToCart()

The `useAddItemsToCart` hook allows you to add multiple items to the cart at a single time. The hook returns a function that accepts an array of objects with keys `variantId` and `quantity`. It returns a `void` promise that will throw if it encounters an error. You can optionally include an array of `customAttributes` with each item.

```javascript
import React from 'react'

import { useAddItemsToCart, useCartCount } from '../hooks'

const ExampleUseAddItemsToCart = () => {
  const cartCount = useCartCount()
  const addItemsToCart = useAddItemsToCart()

  const addToCart = async () => {
    const items = [
      {
        variantId: 'some_variant_id',
        quantity: 1,
      },
    ]

    try {
      await addItemsToCart(items)
    } catch {
      console.log('There was a problem adding that item to your cart.')
    }
  }

  return (
    <>
      <p>There are currently {cartCount} items in your cart.</p>
      <Button onClick={() => addToCart()}>Add items to your cart</Button>
    </>
  )
}
```

### useAddItemToCart()

The `useAddItemToCart` is similar to the `useAddItemsToCart`, but is only for a single item at a time. The hook returns a function that accepts three arguments: `variantId`, `quantity`, and (optionally) an array of `customAttributes`.

```javascript
import React from 'react'
import { useAddItemToCart, useCartCount } from '../hooks'

const ExampleUseAddItemToCart = () => {
  const cartCount = useCartCount()
  const addItemToCart = useAddItemToCart()

  const addToCart = async () => {
    const variantId = 'some_variant_id'
    const quantity = 1

    try {
      await addItemToCart(variantId, quantity)
    } catch {
      console.log('There was a problem adding that item to your cart.')
    }
  }

  return (
    <>
      <p>There are currently {cartCount} items in your cart.</p>
      <button onClick={() => addToCart()}>Add an item to your cart</button>
    </>
  )
}
```

### useRemoveItemsFromCart()

The `useRemoveItemFromCart` hook allows you to remove multiple items from the cart at a single time. The hook returns a function that accepts an array of `variantId` strings. It returns a `void` promise that will throw if it encounters an error.

```javascript
import React from 'react'
import { useRemoveItemsFromCart, useCartItems } from '../hooks'

const ExampleUseRemoveItemsFromCart = () => {
  const cartItems = useCartItems()
  const removeItemsFromCart = useRemoveItemsFromCart()

  const removeFromCart = async () => {
    if (cartItems.length < 1) {
      return
    }
    const variantId = cartItems[0].variant.id

    try {
      await removeItemsFromCart([variantId])
    } catch {
      console.log('There was a problem removing that item from your cart.')
    }
  }


  return (
    <div>
    {cartItems.length > 0 ? (
      <div>
        <p>Your cart has the following items:</p>
        <ul>
          {cartItems.map(lineItem => (
            <li key={lineItem.title}>
              {lineItem.title} - {lineItem.variant.title}
            </li>
          ))}
        </ul>
      </<div>
    ) : (
      <p>Your cart is empty.</p>
    )}
      <button onClick={() =>removeFromCart()} sx={{ mb: 3 }}>
        Remove items from your cart
      </button>
    </div>
  )
}
```

### useRemoveItemFromCart()

The `useRemoveItemFromCart` is similar to the `useRemoveItemsFromCart` hook, but is only for a single item at a time. The hook returns a function that accepts a single argument: `variantId`.

```javascript
import React from 'react'
import { useRemoveItemFromCart, useCartItems } from '../hooks'

const ExampleUseRemoveItemFromCart = () => {
  const cartItems = useCartItems()
  const removeItemFromCart = useRemoveItemFromCart()

  const removeFromCart = async () => {
    if (cartItems.length < 1) {
      return
    }
    const variantId = cartItems[0].variant.id

    try {
      await removeItemFromCart(variantId)
    } catch {
      console.log('There was a problem removing that item from your cart.')
    }
  }

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <p>Your cart has the following items:</p>
          <ul>
            {cartItems.map(lineItem => (
              <li key={lineItem.title}>
                {lineItem.title} - {lineItem.variant.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={() => removeFromCart()} sx={{ mb: 3 }}>
        Remove item from your cart
      </button>
    </>
  )
}
```

### useUpdateItemQuantity()

The `useUpdateItemQuantity()` hook returns a function that updates the quantity of a lineitem currently in the cart. The returned function accepts two arguments: `variantId` and `quantity`. It returns a `void` Promise that throws if it encounters an error. If `0` is passed in as the quantity, it removes the item from the cart.

```javascript
import React, { useState } from 'react'
import { useUpdateItemQuantity, useCartItems } from '../hooks'

const ExampleUseUpdateItemQuantity = () => {
  const [quantity, setQuantity] = useState(1)
  const [item] = useCartItems()
  const updateItemQuantity = useUpdateItemQuantity()

  const updateQuantity = async () => {
    if (item == null) {
      return
    }

    const variantId = item.variant.id

    try {
      await updateItemQuantity(variantId, quantity)
    } catch {
      console.log("There was a problem updating that item's quantity.")
    }
  }

  return (
    <div>
      {item == null ? (
        <p>Your cart is empty.</p>
      ) : (
        <p>
          {item.title} - {item.variant.title} ({item.quantity})
        </p>
      )}
      <form onSubmit={() => updateQuantity()}>
        <input
          type='number'
          defaultValue={quantity}
          onChange={event => setQuantity(Number(event.target.value))}
        />
        <button>Update quantity</button>
      </form>
    </div>
  )
}
```

### useClientUnsafe()

> using this hook may result in unintended side-effects

The `useClientUnsafe` hook returns the client object currently held in the context. From there you can call methods on it to enable more functionality. Shopify has all [the documentation](https://shopify.github.io/js-buy-sdk/) for what you can do with the client object. Example usage:

```javascript
import React from 'react'
import { useClientUnsafe } from 'gatsby-theme-shopify-manager'

export function ExampleUseClientUnsafe() {
  const client = useClientUnsafe()
  // do work with the client here
}
```

### useSetCartUnsafe()

> using this hook may result in unintended side-effects

The `useSetCartUnsafe` returns a function that allows the user to set the current cart state. You can use it similar to the function returned from a `useState` destructure. This is useful for interactions with the `client` object that return an updated cart object. Example usage:

```javascript
import React from 'react'
import { useClientUnsafe, useSetCartUnsafe } from 'gatsby-theme-shopify-manager'

export function ExampleUseSetCartUnsafe() {
  const client = useClientUnsafe()
  const setCart = useSetCartUnsafe()

  async function changeCart() {
    const newCart = await client.doSomeMethodThatReturnsACartObject()
    setCart(newCart)
  }

  changeCart()
}
```

## User hooks

### useCustomer()

The most basic hook is the `useCustomer()` hook. This hook checks if there is a user registered and saved in local storage. It will also check if the user accestoken is still valid. Useethis hook if you want the user details like: orders, first name, email & token.

```javascript
import React from 'react'
import { useCustomer } from '../hooks'

const account = () => {
  const user = useCustomer()

  return <p>{user && <div>{user.firstName}</div>}</p>
}
```

### useLoginCustomer()

The `useLoginCustomer()` hook. Login the customer and if successful saves the user data locally so with `useCustomer()` you can get the customer data. We will return response, loading and error. The hook returns a function that accepts a two arguments: `email` and `password`.

```javascript
import React, { useState } from 'react'
import { useLoginCustomer } from '../hooks'

const account = () => {
  const [loginCustomer, { response, loading, error }] = useLoginCustomer()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () = {
    await loginCustomer(email, password)
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <h5>Log In</h5>
        {loading && <span>Loading</span>}
        {error && (
          <div>
            <span role='img' aria-label='error'>
              ⚠️
            </span>
            : {error}
          </div>
        )}
        <div>Email</div>
        <input
          name='email'
          type='text'
          onChange={e => setEmail(e.target.value)}
          required={true}
          placeholder='Enter Email'
        />
        <div>Password</div>
        <input
          name='password'
          type='password'
          required={true}
          onChange={e => setPassword(e.target.value)}
          placeholder='Enter Password'
        />
        <button type='submit'>
          {loading ? <span>Loading</span> : <span>Log in</span>}
        </button>
      </form>
    </div>
  )
}
```

### useLogoutCustomer()

The `useLogoutCustomer()` hook. This hooks logouts the customer, needs to be used together with `useCustomer()` The function accepts one argument: `user`. The hook returns a function and `response`, `loading` for loading state and `error` if there is an error.

```javascript
import React, { useState } from 'react'
import { useLogoutCustomer, useCustomer } from '../hooks'

const account = () => {
  const user = useCustomer()
  const [logoutCustomer, { response, error }] = useLogoutCustomer()

  const handleLogout = async () => {
    await logoutCustomer(user)
  }

  useEffect(() => {
    if (response) {
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
  }, [response])

  return (
    <div>
      {user && (
        <button onClick={() => handleLogout()}>
          {error ? 'Problem with logout' : 'Logout'}
        </button>
      )}
    </div>
  )
}
```

### useForgetPasswordCustomer()

The `useForgetPasswordCustomer()` hook. This hooks will make sure a email gets send to the customer to reset his password. We will return response, loading and error. The hook returns a function that accepts a one argument: `email`. The hook returns a function and `response`, `loading` for loading state and `error` if there is an error.

```javascript
import React, { useState } from 'react'
import { useForgetPasswordCustomer } from '../hooks'

const account = () => {
  const [
    forgetPassword,
    { response, loading, error },
  ] = useForgetPasswordCustomer()
  const [formSuccess, setFormSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const handleSubmit = async () => {
    e.preventDefault()
    await forgetPassword(email)
  }

  useEffect(() => {
    if (response) {
      setFormSuccess(true)
    }
  }, [response])

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)} ref={form}>
        <h2>Forgot your password?</h2>
        {error && (
          <div>
            <span role='img' aria-label='error'>
              ⚠️
            </span>
            : {error}
          </div>
        )}
        {formSuccess && <div>Got it! Email coming your way now.</div>}
        <div>Email</div>
        <input
          name='email'
          type='text'
          required={true}
          placeholder='Enter Email'
          onChange={e => setEmail(e.target.value)}
        />
        <button type='submit'>
          {loading ? <span>Loading</span> : <span>Request Reset</span>}
        </button>
        <p>
          Remember your password? <Link to='/account/login'>Login</Link>
        </p>
      </form>
    </div>
  )
}
```

### useRegisterCustomer()

The `useRegisterCustomer()` hook. With this hook we will register a new customer. The hook returns a function that accepts a one argument: `email`, `passwordField1`, `passwordField2`, `firstName` & `lastName`. The hook returns a function and `response`, `loading` for loading state and `error` if there is an error.

```javascript
import React, { useState } from 'react'
import { useRegisterCustomer } from '../hooks'

const account = () => {
  const [registerCustomer, { response, loading, error }] = useRegisterCustomer()
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [passwordField1, setPasswordField1] = useState('')
  const [passwordField2, setPasswordField2] = useState('')

  const handleSubmit = async () => {
    e.preventDefault()

    await registerCustomer(
      email,
      passwordField1,
      passwordField2,
      firstName,
      lastName,
    )
  }

  useEffect(() => {
    if (response) {
      //if the register when ok, navigate to home
      navigate('/')
    }
  }, [response])

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)} ref={form}>
        <h5>Sign Up</h5>
        {loading && <span>Loading</span>}
        {error && (
          <div className='studio mt1 error'>
            <span role='img' aria-label='error'>
              ⚠️
            </span>
            : {error}
          </div>
        )}
        <div>First Name</div>
        <input
          name='firstName'
          type='text'
          required={true}
          onChange={e => setFirstName(e.target.value)}
          placeholder='First Name'
        />
        <div>Last Name</div>
        <input
          name='lastName'
          type='text'
          required={true}
          onChange={e => setLastName(e.target.value)}
          placeholder='Last Name'
        />
        <div>Email</div>
        <input
          name='email'
          type='text'
          required={true}
          onChange={e => setEmail(e.target.value)}
          placeholder='Enter Email'
        />
        <div>Password</div>
        <p>
          (Must be at least 8 characters long and include a both a lowercase and
          uppercase letter).
        </p>
        <input
          name='password'
          value={passwordField1}
          onChange={e => setPasswordField1(e.target.value)}
          type='password'
          required={true}
          placeholder='Password'
        />
        <div>Confirm Password</div>
        <input
          name='passwordConfirm'
          value={passwordField2}
          onChange={e => setPasswordField2(e.target.value)}
          type='password'
          required={true}
          placeholder='Verify Password'
        />
        <button type='submit'>
          {loading ? <span>Loading</span> : <span>Submit</span>}
        </button>
        <p>
          Already have an account? <Link to='/account/login'>Log in</Link>
        </p>
      </form>
    </div>
  )
}
```

### useActivateCustomer()

The `useActivateCustomer()` hook. With this hook we will activate a new customer after he gets an email to activate his account. This only happens when the client adds the customer in the shopify backend and sends a email to activate the account, usefull for b2b clients. The hook returns a function that accepts a one argument: `passwordField1`, `passwordField2`, user `id` & user `token`. The hook returns a function and `response`, `loading` for loading state and `error` if there is an error.

```javascript
import React, { useState } from 'react'
import { useRegisterCustomer } from '../hooks'

const account = () => {
  const [activateCustomer, { response, loading, error }] = useActivateCustomer()
  const [sucsesMessage, setSucsesMessage] = useState(null)
  const [passwordField1, setPasswordField1] = useState('')
  const [passwordField2, setPasswordField2] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await activateCustomer(
      passwordField1,
      passwordField2,
      props.id,
      props.token,
    )
  }

  useEffect(() => {
    if (response) {
      setSucsesMessage('Activate sucsesful! You Can login now')
      setTimeout(() => {
        navigate('/account')
      }, 1000)
    }
  }, [response])

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <h5>Activate Account</h5>
        <h2>Almost there.</h2>
        {sucsesMessage && (
          <div>
            <span>{sucsesMessage}</span>
          </div>
        )}
        {error && (
          <div>
            <span>{error}</span>
          </div>
        )}
        {loading && (
          <div>
            <span>Loading</span>
          </div>
        )}
        <div>Password</div>
        <input
          type='password'
          value={passwordField1}
          onChange={e => setPasswordField1(e.target.value)}
          placeholder='Password'
        />
        <div>Confirm Password</div>
        <input
          type='password'
          value={passwordField2}
          onChange={e => setPasswordField2(e.target.value)}
          placeholder='Confirm Password'
        />
        <button type='submit'>
          {loading ? <span>Loading</span> : <span>Activate</span>}
        </button>
      </form>

      <p>
        Already have an account? <Link to='/account/login'>Login</Link>
      </p>
    </div>
  )
}
```

### useResetPasswordCustomer()

The `useResetPasswordCustomer()` hook. With this hook we can reset The hook returns a function that accepts the following arguments: `passwordField1`, `passwordField2`, user `id` & reset `token`. The hook returns a function and `response`, `loading` for loading state and `error` if there is an error.

```javascript
import React, { useState } from 'react'
import { useRegisterCustomer } from '../hooks'

const account = () => {
  const [
    resetPassword,
    { response, loading, error },
  ] = useResetPasswordCustomer()

  const [passwordField1, setPasswordField1] = useState('')
  const [passwordField2, setPasswordField2] = useState('')
  const [formSuccess, setFormSucces] = useState(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await resetPassword(passwordField1, passwordField2, props.id, props.token)
  }

  useEffect(() => {
    if (response) {
      setFormSucces(true)
      setTimeout(() => {
        navigate('/account')
      }, 1500)
    }
  }, [response])

  return (
    <div>
      <Helmet title='reset' />
      <form onSubmit={e => handleSubmit(e)} ref={form}>
        <h5>Reset Your Password</h5>
        <h2>Let's get you logged back in.</h2>

        {loading && <span>Loading</span>}

        {error && (
          <div>
            <span role='img' aria-label='error'>
              ⚠️
            </span>
            : {error}
          </div>
        )}

        {formSuccess && (
          <div>Password changed!, you can now login with your new password</div>
        )}

        <div>Password</div>
        <input
          name='password'
          type='password'
          value={passwordField1}
          onChange={e => setPasswordField1(e.target.value)}
          required={true}
          placeholder='Password'
        />

        <div>Confirm Password</div>
        <input
          name='passwordConfirm'
          type='password'
          value={passwordField2}
          onChange={e => setPasswordField2(e.target.value)}
          required={true}
          placeholder='Confirm Password'
        />
        <button type='submit'>
          {loading ? 'Resetting' : 'Reset Password'}
        </button>
      </form>
    </div>
  )
}
```
# phill-simple
