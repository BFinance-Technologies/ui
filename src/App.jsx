import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Status from './components/Status'
import Dropdown from './components/Dropdown'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const dropdownOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>UI BFinance Component Library</h1>
      </header>

      <main className="main">
        <section className="section">
          <h2>Button</h2>
          <div className="componentGrid">
            <div>
              <h3>Primary</h3>
              <Button variant="primary">Primary Button</Button>
            </div>
            <div>
              <h3>Secondary</h3>
              <Button variant="secondary">Secondary Button</Button>
            </div>
            <div>
              <h3>Tertiary</h3>
              <Button variant="tertiary">Tertiary Button</Button>
            </div>
            <div>
              <h3>Transparent</h3>
              <Button variant="transparent">Transparent Button</Button>
            </div>
            <div>
              <h3>Primary Disabled</h3>
              <Button variant="primary" disabled>Disabled Button</Button>
            </div>
            <div>
              <h3>Custom Size</h3>
              <Button variant="primary" height={48} width={200}>
                Large Button
              </Button>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Input</h2>
          <div className="componentGrid">
            <div>
              <h3>Default</h3>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter text..."
                width="250px"
              />
            </div>
            <div>
              <h3>Disabled</h3>
              <Input
                value="Disabled input"
                placeholder="Enter text..."
                disabled
                width="250px"
              />
            </div>
            <div>
              <h3>Custom Style</h3>
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
                width="250px"
                containerBorderRadius="8px"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Dropdown</h2>
          <div className="componentGrid">
            <div>
              <h3>Default</h3>
              <Dropdown
                title="Select option"
                options={dropdownOptions}
                width="200px"
                menuWidth='200px'
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Status</h2>
          <div className="componentGrid">
            <div>
              <h3>Approved (Small)</h3>
              <Status type="approved" variant="small" width="100px">
                Approved
              </Status>
            </div>
            <div>
              <h3>Pending (Small)</h3>
              <Status type="pending" variant="small" width="100px">
                Pending
              </Status>
            </div>
            <div>
              <h3>Declined (Small)</h3>
              <Status type="declined" variant="small" width="100px">
                Declined
              </Status>
            </div>
            <div>
              <h3>Processing (Small)</h3>
              <Status type="processing" variant="small" width="100px">
                Processing
              </Status>
            </div>
            <div>
              <h3>Approved (Large)</h3>
              <Status type="approved" variant="large">
                Approved
              </Status>
            </div>
            <div>
              <h3>Pending (Large)</h3>
              <Status type="pending" variant="large">
                Pending
              </Status>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
