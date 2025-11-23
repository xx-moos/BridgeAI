import { useState } from 'react'
import { Button, ConfigProvider, Layout, Input } from 'antd'
import {
  PlusOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined,
  MessageOutlined,
  RobotOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  StarOutlined
} from '@ant-design/icons'
import styles from './App.module.less'
import { antdThemeToken } from './styles/theme'

const { Sider, Header, Content, Footer } = Layout
const { TextArea } = Input

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatHistory {
  id: string
  title: string
  timestamp: Date
}

function App(): React.JSX.Element {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [currentChatId, setCurrentChatId] = useState<string | null>(null)

  // 模拟对话历史数据
  const chatHistories: ChatHistory[] = [
    { id: '1', title: '如何学习TypeScript', timestamp: new Date() },
    { id: '2', title: 'React Hooks最佳实践', timestamp: new Date(Date.now() - 86400000) },
    {
      id: '3',
      title: 'Electron项目搭建指南',
      timestamp: new Date(Date.now() - 86400000 * 2)
    }
  ]

  // 发送消息
  const handleSendMessage = (): void => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputValue('')

    // 模拟AI回复
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: '我是BridgeAI智能助手，我收到了你的消息：' + inputValue,
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  // 新建对话
  const handleNewChat = (): void => {
    setMessages([])
    setCurrentChatId(null)
  }

  // 渲染欢迎页面
  const renderWelcomePage = (): React.JSX.Element => (
    <div className={styles.welcomePage}>
      <div className={styles.welcomeIcon}>🤖</div>
      <h1 className={styles.welcomeTitle}>欢迎使用 BridgeAI</h1>
      <p className={styles.welcomeDesc}>
        你的AI智能助手，帮助你解决问题、获取灵感、提高效率。开始一段新对话吧！
      </p>
      <div className={styles.quickActions}>
        <div className={styles.actionCard}>
          <div className={styles.actionIcon}>💡</div>
          <div className={styles.actionTitle}>创意灵感</div>
          <div className={styles.actionDesc}>帮你头脑风暴，激发创造力</div>
        </div>
        <div className={styles.actionCard}>
          <div className={styles.actionIcon}>📝</div>
          <div className={styles.actionTitle}>写作助手</div>
          <div className={styles.actionDesc}>润色文案，优化表达</div>
        </div>
        <div className={styles.actionCard}>
          <div className={styles.actionIcon}>💻</div>
          <div className={styles.actionTitle}>代码编程</div>
          <div className={styles.actionDesc}>解决编程问题，优化代码</div>
        </div>
        <div className={styles.actionCard}>
          <div className={styles.actionIcon}>🎓</div>
          <div className={styles.actionTitle}>学习辅导</div>
          <div className={styles.actionDesc}>解答疑惑，帮助学习</div>
        </div>
      </div>
    </div>
  )

  // 渲染消息列表
  const renderMessages = (): React.JSX.Element => (
    <div className={styles.messageList}>
      {messages.map((msg) => (
        <div key={msg.id} className={`${styles.messageItem} ${styles[msg.type]}`}>
          <div className={`${styles.messageAvatar} ${styles[msg.type + 'Avatar']}`}>
            {msg.type === 'user' ? <UserOutlined /> : <RobotOutlined />}
          </div>
          <div className={styles.messageBubble}>
            <div className={styles.messageText}>{msg.content}</div>
            <div className={styles.messageTime}>{msg.timestamp.toLocaleTimeString()}</div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <ConfigProvider theme={{ token: antdThemeToken }}>
      <Layout className={styles.appLayout}>
        {/* 左侧边栏 */}
        <Sider width={280} className={styles.sider}>
          {/* Logo区域 */}
          <div className={styles.siderHeader}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>🌉</div>
              <h1 className={styles.logoText}>BridgeAI</h1>
            </div>
          </div>

          {/* 新建对话按钮 */}
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className={styles.newChatBtn}
            onClick={handleNewChat}
            block
          >
            新建对话
          </Button>

          {/* 对话历史列表 */}
          <div className={styles.chatHistorySection}>
            <div className={styles.historyGroup}>
              <div className={styles.groupTitle}>今天</div>
              {chatHistories.slice(0, 1).map((chat) => (
                <div
                  key={chat.id}
                  className={`${styles.historyItem} ${currentChatId === chat.id ? styles.active : ''}`}
                  onClick={() => setCurrentChatId(chat.id)}
                >
                  <MessageOutlined className={styles.historyIcon} />
                  <span className={styles.historyTitle}>{chat.title}</span>
                </div>
              ))}
            </div>

            <div className={styles.historyGroup}>
              <div className={styles.groupTitle}>昨天</div>
              {chatHistories.slice(1, 2).map((chat) => (
                <div
                  key={chat.id}
                  className={`${styles.historyItem} ${currentChatId === chat.id ? styles.active : ''}`}
                  onClick={() => setCurrentChatId(chat.id)}
                >
                  <MessageOutlined className={styles.historyIcon} />
                  <span className={styles.historyTitle}>{chat.title}</span>
                </div>
              ))}
            </div>

            <div className={styles.historyGroup}>
              <div className={styles.groupTitle}>最近7天</div>
              {chatHistories.slice(2).map((chat) => (
                <div
                  key={chat.id}
                  className={`${styles.historyItem} ${currentChatId === chat.id ? styles.active : ''}`}
                  onClick={() => setCurrentChatId(chat.id)}
                >
                  <MessageOutlined className={styles.historyIcon} />
                  <span className={styles.historyTitle}>{chat.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 底部菜单 */}
          <div className={styles.siderFooter}>
            <div className={styles.footerMenu}>
              <div className={styles.footerMenuItem}>
                <SettingOutlined className={styles.menuIcon} />
                <span className={styles.menuText}>设置</span>
              </div>
              <div className={styles.footerMenuItem}>
                <UserOutlined className={styles.menuIcon} />
                <span className={styles.menuText}>个人中心</span>
              </div>
            </div>
          </div>
        </Sider>

        {/* 右侧主内容区 */}
        <Layout className={styles.mainContent}>
          {/* 顶部Header */}
          <Header className={styles.contentHeader}>
            <div className={styles.headerLeft}>
              <span className={styles.currentChatTitle}>
                {messages.length > 0 ? '当前对话' : 'BridgeAI'}
              </span>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.headerAction}>
                <FileTextOutlined />
              </div>
              <div className={styles.headerAction}>
                <ThunderboltOutlined />
              </div>
              <div className={styles.headerAction}>
                <StarOutlined />
              </div>
              <div className={styles.avatar}>AI</div>
            </div>
          </Header>

          {/* 对话内容区 */}
          <Content className={styles.chatContent}>
            {messages.length === 0 ? renderWelcomePage() : renderMessages()}
          </Content>

          {/* 底部输入框 */}
          <Footer className={styles.chatFooter}>
            <div className={styles.inputWrapper}>
              <TextArea
                className={styles.chatInput}
                placeholder="输入消息...按Enter发送,Shift+Enter换行"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={(e) => {
                  if (!e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                autoSize={{ minRows: 1, maxRows: 4 }}
              />
              <div className={styles.inputActions}>
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  className={styles.sendBtn}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                />
              </div>
            </div>
            <div className={styles.footerTips}>BridgeAI可能会出错。请核查重要信息。</div>
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
