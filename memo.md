https://github.com/nextjs-microcms-book/nextjs-website-sample

```
// 全ての変更をステージ
git add .
git add <file>

// ステージされていない変更を破棄
git restore <file>

// コミット
git commit -m <message>

// 状態を確認
git status

// リモートのURLを設定
git remote add origin <gitのHTTPS>

// リモートの確認
git remote -v

// 追跡関係を設定してpush
git push -u origin HEAD （次回以降はgit pushのみでよくなる）

// ローカルブランチの一覧を表示
git branch

// リモートブランチの一覧を表示
git branch -r

// 現在のHEADから、指定したブランチ名を名前として、新しいブランチを作成する。（新しく作成したブランチへの切り替えは行わない）
git branch <ブランチ名>

// 現在のHEADから、指定したブランチ名を名前として、新しいブランチを作成する。（新しく作成したブランチへの切り替える）
git checkout -b <ブランチ名>

// 現在チェックアウトしているブランチ名を新しいブランチ名に変更する。
git branch -m <新しいブランチ名>

// 追跡関係の確認
git branch -vv
```
