nodeEnv=staging

find ./.env.staging -type f -exec sed -i -e "/^REACT_APP_NODE_ENV=/s/=.*/=\'$nodeEnv\'/" {} \;
