import * as React from 'react';

const TopNavigation = ({ name }) => (
  <section>
    <a href="/">{name}</a>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  </section>
);
export { TopNavigation };
